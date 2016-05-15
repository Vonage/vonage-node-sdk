"use strict";

import nexmo from './index';

class NumberInsight {
  
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition NumberInsight options.
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
  numberInsight() {
    this._nexmo.numberInsight.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  numberInsightBasic() {
    this._nexmo.numberInsightBasic.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  numberInsightStandard() {
    this._nexmo.numberInsightStandard.apply(this._nexmo, arguments);
  }
  
}

export default NumberInsight;
