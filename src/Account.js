"use strict";

import nexmo from './index';

class Account {
  
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition SMS options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
    
    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || nexmo;
    
    this._nexmo.initialize(this.creds.key, this.creds.secret, this.options.debug);
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
  changePassword() {
    this._nexmo.changePassword.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  changeMoCallbackUrl() {
    this._nexmo.changeMoCallbackUrl.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  changeDrCallbackUrl() {
    this._nexmo.changeDrCallbackUrl.apply(this._nexmo, arguments);
  }
  
}

export default Account;
