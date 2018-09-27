"use strict";

import nexmo from "./index";

class Account {
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition Account options.
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
  checkBalance(callback) {
    return this.options.rest.get("/account/get-balance", callback);
  }

  updatePassword(newSecret, callback) {
    return this.options.rest.postUseQueryString(
      "/account/settings",
      { newSecret },
      callback
    );
  }

  updateSMSCallback(moCallBackUrl, callback) {
    return this.options.rest.postUseQueryString(
      "/account/settings",
      { moCallBackUrl },
      callback
    );
  }

  updateDeliveryReceiptCallback(drCallBackUrl, callback) {
    return this.options.rest.postUseQueryString(
      "/account/settings",
      { drCallBackUrl },
      callback
    );
  }

  topUp(trx, callback) {
    return this.options.rest.postUseQueryString(
      "/account/top-up",
      { trx },
      callback
    );
  }

  listSecrets(api_key, callback) {
    return this.options.api.get(
      "/accounts/" + api_key + "/secrets",
      {},
      callback,
      false,
      true
    );
  }

  getSecret(api_key, id, callback) {
    return this.options.api.get(
      "/accounts/" + api_key + "/secrets/" + id,
      {},
      callback,
      false,
      true
    );
  }

  createSecret(api_key, secret, callback) {
    return this.options.api.postJson(
      "/accounts/" + api_key + "/secrets/",
      { secret: secret },
      callback,
      false,
      true
    );
  }

  deleteSecret(api_key, id, callback) {
    return this.options.api.delete(
      "/accounts/" + api_key + "/secrets/" + id,
      callback,
      false,
      true
    );
  }
}

export default Account;
