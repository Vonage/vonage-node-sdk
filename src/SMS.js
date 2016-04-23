"use strict";

import nexmo from './index';

class SMS {
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition SMS options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
    
    nexmo.initialize(this.creds.key, this.creds.secret, this.options.debug);
  }
  
  /**
   * TODO: document
   */
  sendTextMessage() {
    nexmo.sendTextMessage.apply(this, arguments);
  }
}

export default SMS;
