"use strict";

import vonage from "./index";

import Pricing from "./Pricing";

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

    this._pricing = new Pricing(credentials, options);

    // Used to facilitate testing of the call to the underlying object
    this._vonage = this.options.vonageOverride || vonage;

    this._vonage.initialize(
      this.creds.apiKey,
      this.creds.apiSecret,
      this.options
    );
  }

  /**
   * TODO: remove with next major release
   */
  getPricing() {
    this._pricing.get.apply(this, arguments);
  }

  /**
   * TODO: remove with next major release
   */
  getPhonePricing() {
    this._pricing.getPhone.apply(this, arguments);
  }

  /**
   * TODO: document
   */
  get() {
    this._vonage.getNumbers.apply(this._vonage, arguments);
  }

  /**
   * TODO: document
   */
  search() {
    this._vonage.searchNumbers.apply(this._vonage, arguments);
  }

  /**
   * TODO: document
   */
  buy() {
    this._vonage.buyNumber.apply(this._vonage, arguments);
  }

  /**
   * TODO: document
   */
  cancel() {
    this._vonage.cancelNumber.apply(this._vonage, arguments);
  }

  /**
   * TODO: document
   */
  update() {
    this._vonage.updateNumber.apply(this._vonage, arguments);
  }
}

export default Number;
