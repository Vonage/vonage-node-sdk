"use strict";

import nexmo from "./index";
import fs from "fs";
import querystring from "querystring";

class Channel {
  static get PATH() {
    return "/v0.1/messages";
  }

  constructor(credentials, options) {
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

  send(to, from, message, callback) {
    const params = {
      to: to,
      from: from,
      message: message
    };

    return this.options.api.post(Channel.PATH, params, callback, true, {
      "Content-Type": "application/json"
    });
  }
}

export default Channel;
