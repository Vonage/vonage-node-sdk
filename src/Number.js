"use strict";

import nexmo from "./index";

class Number {
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition Number options.
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
  getPricing() {
    this._nexmo.getPricing.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  getPhonePricing() {
    this._nexmo.getPhonePricing.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  get() {
    this._nexmo.getNumbers.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  search() {
    this._nexmo.searchNumbers.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  buy() {
    this._nexmo.buyNumber.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  cancel() {
    this._nexmo.cancelNumber.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  update() {
    this._nexmo.updateNumber.apply(this._nexmo, arguments);
  }
}

export default Number;
