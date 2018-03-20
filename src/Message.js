"use strict";

class Message {
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition SMS options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
  }

  _sendMessage(data, callback) {
    if (!data.from) {
      return callback("Invalid from address");
    }
    if (!data.to) {
      return callback("Invalid to address");
    }

    return this.options.rest.postUseQueryString("/sms/json", data, callback);
  }

  /**
   * TODO: document
   */
  sendSms(from, to, text, opts, callback) {
    if (!text) {
      return callback("Invalid Text Message");
    }

    if (!callback) {
      callback = opts;
      opts = {};
    }

    opts = { ...opts, from, to, text };
    return this._sendMessage(opts, callback);
  }

  /**
   * TODO: document
   */
  sendBinaryMessage(from, to, body, udh, callback) {
    if (!body) {
      return callback("Invalid body value in Binary Message");
    }
    if (!udh) {
      return callback("Invalid udh value in Binary Message");
    }

    return this._sendMessage({ from, to, body, udh, type: "binary" }, callback);
  }

  /**
   * TODO: document
   */
  sendWapPushMessage(from, to, title, url, validity, callback) {
    if (!title) {
      return callback("Invalid title in WAP Push message");
    }

    if (!url) {
      return callback("Invalid url in WAP Push message");
    }

    if (typeof validity === "function") {
      callback = validity;
      validity = 86400000;
    }

    return this._sendMessage(
      { from, to, title, validity, url, type: "wappush" },
      callback
    );
  }

  _sendShortcode(type, to, messageParams, opts, callback) {
    if (!to) {
      return callback("Invalid to address");
    }

    if (!messageParams) {
      return callback("Invalid shortcode message parameters");
    }

    if (typeof opts === "function") {
      callback = opts;
      opts = {};
    }

    return this.options.rest.postUseQueryString(
      `/sc/us/${type}/json`,
      { ...messageParams, to, ...opts },
      function(err, apiResponse) {
        if (!err && apiResponse.status && apiResponse.messages[0].status > 0) {
          return callback(new Error(apiResponse.messages[0]["error-text"]));
        }
        return callback(null, apiResponse);
      }
    );
  }

  /**
   * TODO: document
   */
  shortcodeAlert(recipient, messageParams, opts, callback) {
    return this._sendShortcode(
      "alert",
      recipient,
      messageParams,
      opts,
      callback
    );
  }

  /**
   * TODO: document
   */
  shortcode2FA(recipient, messageParams, opts, callback) {
    return this._sendShortcode("2fa", recipient, messageParams, opts, callback);
    this._nexmo.shortcode2FA.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  shortcodeMarketing(recipient, messageParams, opts, callback) {
    return this._sendShortcode(
      "marketing",
      recipient,
      messageParams,
      opts,
      callback
    );
  }

  search(id, callback) {
    // If it's a string we're searching for a single message
    if (typeof id == "string") {
      return this.options.rest.get("/search/message", { id }, callback);
    }

    // Otherwise we expect an array
    return this.options.rest.get("/search/messages", { ids: id }, callback);
  }

  searchRejections(to, date, callback) {
    return this.options.rest.get("/search/rejections", { to, date }, callback);
  }
}

export default Message;
