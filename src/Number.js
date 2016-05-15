"use strict";

import nexmo from './index';

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
    
    this._nexmo.initialize(this.creds.key, this.creds.secret, this.options.debug);
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
  getNumbers() {
    this._nexmo.getNumbers.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  searchNumbers() {
    this._nexmo.searchNumbers.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  buyNumber() {
    this._nexmo.buyNumber.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  cancelNumber() {
    this._nexmo.cancelNumber.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  updateNumber() {
    this._nexmo.updateNumber.apply(this._nexmo, arguments);
  }
  
}

export default Number;
