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
  getPricing(country, callback) {
    if (!country || country.length !== 2) {
      return callback("Invalid country code");
    }

    return this.options.rest.get(
      "/account/get-pricing/outbound",
      { country },
      callback
    );
  }

  /**
   * TODO: document
   */
  getPhonePricing(product, msisdn, callback) {
    if (!product || (product !== "sms" && product !== "voice")) {
      return callback("Invalid product. Should be one of [voice, sms]");
    }

    if (!msisdn) {
      return callback("Invalid MSISDN passed");
    }

    let path = "/account/get-phone-pricing/outbound";
    path +=
      "/" +
      product +
      "/" +
      this.creds.apiKey +
      "/" +
      this.creds.apiSecret +
      "/" +
      msisdn;

    return this.options.rest.get(path, {}, callback);
  }

  /**
   * TODO: document
   */
  get(options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    }

    return this.options.rest.get("/account/numbers", options, callback);
  }

  /**
   * TODO: document
   */
  search(country, pattern, callback) {
    if (!country || country.length !== 2) {
      return callback("Invalid country code");
    }

    if (typeof pattern === "function") {
      callback = pattern;
      pattern = {};
    }

    let options = {};

    // `pattern` can be an object or a string
    if (typeof pattern === "object") {
      options = { ...pattern, country };
    } else {
      options = { pattern, country };
    }

    return this.options.rest.get("/account/numbers", options, callback);
  }

  /**
   * TODO: document
   */
  buy(country, msisdn, callback) {
    if (!country || country.length !== 2) {
      return callback("Invalid country code");
    }
    if (!msisdn) {
      return callback("Invalid MSISDN passed");
    }

    return this.options.rest.post("/number/buy", { country, msisdn }, callback);
  }

  /**
   * TODO: document
   */
  cancel(country, msisdn, callback) {
    if (!country || country.length !== 2) {
      return callback("Invalid country code");
    }
    if (!msisdn) {
      return callback("Invalid MSISDN passed");
    }

    return this.options.rest.post(
      "/number/cancel",
      { country, msisdn },
      callback
    );
  }

  /**
   * TODO: document
   */
  update(country, msisdn, params, callback) {
    if (!country || country.length !== 2) {
      return callback("Invalid country code");
    }
    if (!msisdn) {
      return callback("Invalid MSISDN passed");
    }

    let options = { country, msisdn, ...params };
    return this.options.rest.post("/number/update", options, callback);
  }
}

export default Number;
