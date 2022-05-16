"use strict";

import vonage from "./index";
import Utils from "./Utils";
import Pricing from "./Pricing";

class Number {
  static get PATH() {
    return "/number";
  }

  static get ERROR_MESSAGES() {
    return {
      optionsNotAnObject:
        "Options parameter should be a dictionary. Check the docs for valid properties for options",
      countrycode: "Invalid Country Code",
      msisdn: "Invalid MSISDN passed",
    };
  }
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
  get(options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else if (typeof options !== "object") {
      Utils.sendError(
        callback,
        new Error(Number.ERROR_MESSAGES.optionsNotAnObject)
      );
    }

    options.api_key = options.api_key || this.creds.apiKey;
    options.api_secret = options.api_secret || this.creds.apiSecret;

    this.options.httpClient.request(
      {
        path: Utils.createPathWithQuery(`/account${Number.PATH}s`, options),
      },
      callback
    );
  }

  /**
   * TODO: document
   */
  search(countryCode, pattern, callback) {
    let params = {
      api_key: this.creds.apiKey,
      api_secret: this.creds.apiSecret,
    };
    if (!countryCode || countryCode.length !== 2) {
      Utils.sendError(callback, new Error(Number.ERROR_MESSAGES.countrycode));
    } else {
      params["country"] = countryCode;
      if (typeof pattern === "function") {
        callback = pattern;
      } else if (typeof pattern === "object") {
        for (var arg in pattern) {
          params[arg] = pattern[arg];
        }
      } else {
        params["pattern"] = pattern;
      }
      this.options.httpClient.request(
        {
          path: Utils.createPathWithQuery(`${Number.PATH}/search`, params),
        },
        callback
      );
    }
  }

  /**
   * TODO: document
   */
  buy(countryCode, msisdn, targetApiKey, callback) {
    if (!countryCode || countryCode.length !== 2) {
      Utils.sendError(callback, new Error(Number.ERROR_MESSAGES.countrycode));
    } else if (!msisdn) {
      Utils.sendError(callback, new Error(Number.ERROR_MESSAGES.msisdn));
    } else {
      let opts = {
        country: countryCode,
        msisdn,
        api_key: this.creds.apiKey,
        api_secret: this.creds.apiSecret,
      };

      if (targetApiKey instanceof Function) {
        callback = targetApiKey;
      } else {
        opts.target_api_key = targetApiKey;
      }

      const path = Utils.createPathWithQuery(`${Number.PATH}/buy`, opts);
      this.options.httpClient.request(
        {
          path: path,
        },
        "POST",
        callback
      );
    }
  }

  /**
   * TODO: document
   */
  cancel(countryCode, msisdn, targetApiKey, callback) {
    if (!countryCode || countryCode.length !== 2) {
      Utils.sendError(callback, new Error(Number.ERROR_MESSAGES.countrycode));
    } else if (!msisdn) {
      Utils.sendError(callback, new Error(Number.ERROR_MESSAGES.msisdn));
    } else {
      let opts = {
        country: countryCode,
        msisdn,
        api_key: this.creds.apiKey,
        api_secret: this.creds.apiSecret,
      };

      if (targetApiKey instanceof Function) {
        callback = targetApiKey;
      } else {
        opts.target_api_key = targetApiKey;
      }

      this.options.httpClient.request(
        {
          path: Utils.createPathWithQuery(`${Number.PATH}/cancel`, opts),
        },
        "POST",
        callback
      );
    }
  }

  /**
   * TODO: document
   */
  update(countryCode, msisdn, params, callback) {
    if (!countryCode || countryCode.length !== 2) {
      Utils.sendError(callback, new Error(Number.ERROR_MESSAGES.countrycode));
    } else if (!msisdn) {
      Utils.sendError(callback, new Error(Number.ERROR_MESSAGES.msisdn));
    } else {
      params["country"] = countryCode;
      params["msisdn"] = msisdn;
      params["api_key"] = this.creds.apiKey;
      params["api_secret"] = this.creds.apiSecret;

      this.options.httpClient.request(
        {
          path: Utils.createPathWithQuery(`${Number.PATH}/update`, params),
        },
        "POST",
        callback
      );
    }
  }
}

export default Number;
