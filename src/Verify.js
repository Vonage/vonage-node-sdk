"use strict";

import nexmo from "./index";

class Verify {
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition Verify options.
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
  request() {
    this._nexmo.verifyNumber.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  check() {
    this._nexmo.checkVerifyRequest.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  control() {
    this._nexmo.controlVerifyRequest.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  search() {
    this._nexmo.searchVerifyRequest.apply(this._nexmo, arguments);
  }
}

export default Verify;
