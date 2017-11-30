"use strict";

import querystring from "querystring";
import nexmo from "./index";

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

    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || nexmo;

    this._nexmo.initialize(
      this.creds.apiKey,
      this.creds.apiSecret,
      this.options
    );
  }

  /**
   * TODO: document
   */
  sendSms() {
    this._nexmo.sendTextMessage.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  sendBinaryMessage() {
    this._nexmo.sendBinaryMessage.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  sendWapPushMessage() {
    this._nexmo.sendWapPushMessage.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  shortcodeAlert() {
    this._nexmo.shortcodeAlert.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  shortcode2FA() {
    this._nexmo.shortcode2FA.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  shortcodeMarketing() {
    this._nexmo.shortcodeMarketing.apply(this._nexmo, arguments);
  }

  search(id, callback) {
    this.options.httpClient.request(
      this.getRequestConfig("GET", "/search/message", { id: id }),
      callback
    );
  }

  getRequestConfig(verb, path, params) {
    params["api_key"] = this.options.auth.api_key;
    params["api_secret"] = this.options.auth.api_secret;

    var bodyParams = "";
    params = querystring.stringify(params);

    if (verb === "GET") {
      path += "?" + params;
    } else {
      bodyParams = params;
    }

    return {
      host: "rest.nexmo.com",
      path: path,
      method: verb,
      body: bodyParams,
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
}

export default Message;
