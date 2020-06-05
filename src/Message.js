"use strict";

import Utils from "./Utils";

import ShortCode from "./ShortCode";

var querystring = require("querystring");

class Message {
  static get ERROR_MESSAGES() {
    return {
      sender: "Invalid from address",
      to: "Invalid to address",
      msg: "Invalid Text Message",
      body: "Invalid Body value in Binary Message",
      udh: "Invalid udh value in Binary Message",
      title: "Invalid title in WAP Push message",
      url: "Invalid url in WAP Push message"
    };
  }

  static get PATH() {
    return "/sms/json";
  }

  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition SMS options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;

    var _shortcode = new ShortCode(this.creds, this.options);

    this.shortcodeAlert = _shortcode.shortcodeAlert.bind(_shortcode);
    this.shortcode2FA = _shortcode.shortcode2FA.bind(_shortcode);
    this.shortcodeMarketing = _shortcode.shortcodeMarketing.bind(_shortcode);
  }

  _sendRequest(endpoint, method, callback) {
    endpoint.path =
      endpoint.path +
      (endpoint.path.indexOf("?") > 0 ? "&" : "?") +
      querystring.stringify({
        api_key: this.creds.apiKey,
        api_secret: this.creds.apiSecret
      });
    this.options.httpClient.request(endpoint, method, callback);
  }

  _sendMessage(data, callback) {
    if (!data.from) {
      Utils.sendError(callback, new Error(Message.ERROR_MESSAGES.sender));
    } else if (!data.to) {
      Utils.sendError(callback, new Error(Message.ERROR_MESSAGES.to));
    } else {
      var path = Message.PATH + "?" + querystring.stringify(data);
      this.options.logger.info(
        "sending message from " +
          data.from +
          " to " +
          data.to +
          " with message " +
          data.text
      );
      this._sendRequest(
        {
          host: this.options.restHost || "rest.nexmo.com",
          path: path
        },
        "POST",
        function(err, apiResponse) {
          if (
            !err &&
            apiResponse.status &&
            apiResponse.messages[0].status > 0
          ) {
            Utils.sendError(
              callback,
              new Error(apiResponse.messages[0]["error-text"]),
              apiResponse
            );
          } else {
            if (callback) callback(err, apiResponse);
          }
        }
      );
    }
  }

  /**
   * TODO: document
   */
  sendSms(sender, recipient, message, opts, callback) {
    if (!message) {
      Utils.sendError(callback, new Error(Message.ERROR_MESSAGES.msg));
    } else {
      if (!callback) {
        callback = opts;
        opts = {};
      }
      opts["from"] = sender;
      opts["to"] = recipient;
      opts["text"] = message;
      this._sendMessage(opts, callback);
    }
  }

  /**
   * TODO: document
   */
  sendBinaryMessage(sender, recipient, body, udh, opts, callback) {
    if (!body) {
      Utils.sendError(callback, new Error(ERROR_MESSAGES.body));
    } else if (!udh) {
      Utils.sendError(callback, new Error(ERROR_MESSAGES.udh));
    } else {
      if (!callback) {
        callback = opts;
        opts = {};
      }
      opts["from"] = sender;
      opts["to"] = recipient;
      opts["type"] = "binary";
      opts["body"] = body;
      opts["udh"] = udh;
      this._sendMessage(opts, callback);
    }
  }

  /**
   * TODO: document
   */
  sendWapPushMessage(sender, recipient, title, url, validity, opts, callback) {
    if (!title) {
      Utils.sendError(callback, new Error(ERROR_MESSAGES.title));
    } else if (!url) {
      Utils.sendError(callback, new Error(ERROR_MESSAGES.url));
    } else {
      if (typeof validity === "function") {
        callback = validity;
        opts = {};
        validity = 86400000;
      }
      if (typeof opts === "function") {
        callback = opts;
        opts = {};
      }
      opts["from"] = sender;
      opts["to"] = recipient;
      opts["type"] = "wappush";
      opts["title"] = title;
      opts["validity"] = validity;
      opts["url"] = url;
      this._sendMessage(opts, callback);
    }
  }

  search(id, callback) {
    if (typeof id == "string") {
      return this.options.rest.get(
        "/search/message",
        {
          id: id
        },
        callback
      );
    }

    // Otherwise we expect an array
    return this.options.rest.get(
      "/search/messages",
      {
        ids: id
      },
      callback
    );
  }

  searchRejections(to, date, callback) {
    return this.options.rest.get(
      "/search/rejections",
      {
        to,
        date
      },
      callback
    );
  }
}

export default Message;
