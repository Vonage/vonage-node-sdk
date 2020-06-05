"use strict";

import Utils from "./Utils";

var querystring = require("querystring");

/**
 * Provides access to the `ShortCode` endpoint.
 */
class ShortCode {
  static get PATH() {
    return "/sc/us/${type}/json";
  }

  static get ERROR_MESSAGES() {
    return {
      to: "Invalid to address",
      msgParams: "Invalid shortcode message parameters",
    };
  }

  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Additional ShortCode options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
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

  _sendViaShortcode(type, recipient, messageParams, opts, callback) {
    if (!recipient) {
      Utils.sendError(callback, new Error(ShortCode.ERROR_MESSAGES.to));
    }
    if (!messageParams || !Object.keys(messageParams)) {
      Utils.sendError(callback, new Error(ShortCode.ERROR_MESSAGES.msgParams));
    }
    opts = opts || {};
    var path = ShortCode.PATH.replace("${type}", type);
    Object.keys(messageParams).forEach(function(key) {
      opts[key] = messageParams[key];
    });
    opts.to = recipient;
    path += "?" + querystring.stringify(opts);
    this.options.logger.info(
      "sending message from shortcode " +
      type +
      " to " +
      recipient +
      " with parameters " +
      JSON.stringify(messageParams)
    );
    this._sendRequest({
        host: this.options.restHost || "rest.nexmo.com",
        path: path
      }, "POST", function(err, apiResponse) {
      if (!err && apiResponse.status && apiResponse.messages[0].status > 0) {
        Utils.sendError(
          callback,
          new Error(apiResponse.messages[0]["error-text"]),
          apiResponse
        );
      } else {
        if (callback) callback(err, apiResponse);
      }
    });
  }

  shortcodeAlert(recipient, messageParams, opts, callback) {
    this._sendViaShortcode("alert", recipient, messageParams, opts, callback);
  };
  shortcode2FA(recipient, messageParams, opts, callback) {
    this._sendViaShortcode("2fa", recipient, messageParams, opts, callback);
  };
  shortcodeMarketing(
    recipient,
    messageParams,
    opts,
    callback
  ) {
    this._sendViaShortcode("marketing", recipient, messageParams, opts, callback);
  };
}

export default ShortCode;
