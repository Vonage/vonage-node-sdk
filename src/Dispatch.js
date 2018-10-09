"use strict";

import nexmo from "./index";
import fs from "fs";
import querystring from "querystring";

class Dispatch {
  static get PATH() {
    return "/v0.1/dispatch";
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

  create(template, workflow, callback) {
    const params = {
      template: template,
      workflow: workflow
    };

    return this.options.api.post(Dispatch.PATH, params, callback, true, {
      "Content-Type": "application/json"
    });
  }
}

export default Dispatch;
