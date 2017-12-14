"use strict";

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
    if (typeof id == "string") {
      return this.options.rest.get("/search/message", { id: id }, callback);
    }

    // Otherwise we expect an array
    return this.options.rest.get("/search/messages", { ids: id }, callback);
  }

  searchRejections(to, date, callback) {
    return this.options.rest.get("/search/rejections", { to, date }, callback);
  }
}

export default Message;
