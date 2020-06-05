"use strict";

import Utils from "./Utils";

class Verify {
  static get PATH() {
    return "/verify{action}/json";
  }

  static get ERROR_MESSAGES() {
    return {
      verifyValidation: "Missing Mandatory fields (number and/or brand)",
      checkVerifyValidation: "Missing Mandatory fields (request_id and/or code)",
      controlVerifyValidation: "Missing Mandatory fields (request_id and/or cmd-command)",
      searchVerifyValidation: "Missing Mandatory fields (request_id or request_ids)",
    };
  }
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition Verify options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
  }

  /**
   * TODO: document
   */
  request(inputParams, callback) {
    if (!inputParams.number || !inputParams.brand) {
      Utils.sendError(callback, new Error(Verify.ERROR_MESSAGES.verifyValidation));
    } else {
      inputParams["api_key"] = this.creds.apiKey;
      inputParams["api_secret"] = this.creds.apiSecret;
      this.options.httpClient.request({
          host: this.options.apiHost || "api.nexmo.com",
          path: Utils.createPathWithQuery(`${Verify.PATH.replace("{action}", "")}`, inputParams)
        },
        callback);
    }
  }

  /**
   * TODO: document
   */
  check(inputParams, callback) {
    if (!inputParams.request_id || !inputParams.code) {
      Utils.sendError(callback, new Error(Verify.ERROR_MESSAGES.checkVerifyValidation));
    } else {
      inputParams["api_key"] = this.creds.apiKey;
      inputParams["api_secret"] = this.creds.apiSecret;
      this.options.httpClient.request({
          host: this.options.apiHost || "api.nexmo.com",
          path: Utils.createPathWithQuery(`${Verify.PATH.replace("{action}", "/check")}`, inputParams)
        },
        callback);
    }
  }

  /**
   * TODO: document
   */
  control(inputParams, callback) {
    if (!inputParams.request_id || !inputParams.cmd) {
      Utils.sendError(
        callback,
        new Error(Verify.ERROR_MESSAGES.controlVerifyValidation)
      );
    } else {
      inputParams["api_key"] = this.creds.apiKey;
      inputParams["api_secret"] = this.creds.apiSecret;
      this.options.httpClient.request({
          host: this.options.apiHost || "api.nexmo.com",
          path: Utils.createPathWithQuery(`${Verify.PATH.replace("{action}", "/control")}`, inputParams)
        },
        callback);
    }
  }

  /**
   * TODO: document
   */
  search(requestIds, callback) {
    var requestIdParam = {};
    if (!requestIds) {
      Utils.sendError(callback, new Error(Verify.ERROR_MESSAGES.searchVerifyValidation));
    } else {
      if (Array.isArray(requestIds)) {
        if (requestIds.length === 1) {
          requestIdParam.request_id = requestIds;
        } else {
          requestIdParam.request_ids = requestIds;
        }
      } else {
        requestIdParam.request_id = requestIds;
      }
      requestIdParam["api_key"] = this.creds.apiKey;
      requestIdParam["api_secret"] = this.creds.apiSecret;
      this.options.httpClient.request({
          host: this.options.apiHost || "api.nexmo.com",
          path: Utils.createPathWithQuery(`${Verify.PATH.replace("{action}", "/search")}`, requestIdParam)
        },
        callback);
    }
  }
}

export default Verify;
