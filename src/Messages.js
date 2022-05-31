"use strict";

import vonage from "./index";

class Messages {
  static get PATH() {
    return "/v1/messages";
  }

  constructor(credentials, options) {
    this.creds = credentials;
    this.options = options;

    // Used to facilitate testing of the call to the underlying object
    this._vonage = this.options.nexmoOverride || vonage;

    this._vonage.initialize(
      this.creds.apiKey,
      this.creds.apiSecret,
      this.options
    );
  }

  send(message, callback) {
    let useJWT = false;
    if (this.creds.applicationId) {
      useJWT = true;
    }

    return this.options.api.post(Messages.PATH, message, callback, useJWT, {
      "Content-Type": "application/json",
    });
  }
}

export default Messages;
