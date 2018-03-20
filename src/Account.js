"use strict";

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
}

export default Account;
