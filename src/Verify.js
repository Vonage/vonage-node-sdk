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
  request(options, callback) {
    if (!options.number || !options.brand) {
      return callback("Missing Mandatory fields (number and/or brand)");
    }

    return this.options.api.postUseQueryString(
      "/verify/json",
      options,
      callback
    );
  }

  /**
   * TODO: document
   */
  check(options, callback) {
    if (!options.request_id || !options.code) {
      return callback("Missing Mandatory fields (request_id and/or code)");
    }

    return this.options.api.postUseQueryString(
      "/verify/check/json",
      options,
      callback
    );
  }

  /**
   * TODO: document
   */
  control(options, callback) {
    if (!options.number || !options.cmd) {
      return callback("Missing Mandatory fields (request_id and/or cmd)");
    }

    return this.options.api.postUseQueryString(
      "/verify/control/json",
      options,
      callback
    );
  }

  /**
   * TODO: document
   */
  search(requestIds, callback) {
    if (!requestIds) {
      return callback("Missing Mandatory fields (request_id or request_ids)");
    }

    var requestIdParam = {};
    if (Array.isArray(requestIds)) {
      if (requestIds.length === 1) {
        requestIdParam.request_id = requestIds;
      } else {
        requestIdParam.request_ids = requestIds;
      }
    } else {
      requestIdParam.request_id = requestIds;
    }

    return this.options.api.postUseQueryString(
      "/verify/search/json",
      requestIdParam,
      callback
    );
  }
}

export default Verify;
