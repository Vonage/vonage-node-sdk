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
  checkBalance() {
    this._nexmo.checkBalance.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  updatePassword() {
    this._nexmo.changePassword.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  updateSMSCallback() {
    this._nexmo.changeMoCallbackUrl.apply(this._nexmo, arguments);
  }

  /**
   * TODO: document
   */
  updateDeliveryReceiptCallback() {
    this._nexmo.changeDrCallbackUrl.apply(this._nexmo, arguments);
  }
}

export default Account;
