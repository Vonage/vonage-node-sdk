"use strict";

import nexmo from "./index";

class App {
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition App options.
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
  create() {
    this._nexmo.createApplication.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  get(appId) {
    if (typeof appId !== "object") {
      this._nexmo.getApplication.apply(this._nexmo, arguments);
    } else {
      this._nexmo.getApplications.apply(this._nexmo, arguments);
    }
  }

  /**
   * TODO: document
   */
  update() {
    this._nexmo.updateApplication.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  delete() {
    this._nexmo.deleteApplication.apply(this._nexmo, arguments);
  }
}

export default App;
