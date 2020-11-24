"use strict";

import vonage from "./index";

class Dispatch {
  static get PATH() {
    return "/v0.1/dispatch";
  }

  constructor(credentials, options) {
    this.creds = credentials;
    this.options = options;

    // Used to facilitate testing of the call to the underlying object
    this._vonage = this.options.vonageOverride || vonage;

    this._vonage.initialize(
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
