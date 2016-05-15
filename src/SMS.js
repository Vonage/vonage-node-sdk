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
    
    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || nexmo;
    
    this._nexmo.initialize(this.creds.key, this.creds.secret, this.options.debug);
  }
  
  /**
   * TODO: document
   */
  sendTextMessage() {
    this._nexmo.sendTextMessage.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  sendBinaryMessage() {
    this._nexmo.sendBinaryMessage.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  sendWapPushMessage() {
    this._nexmo.sendWapPushMessage.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  shortcodeAlert() {
    this._nexmo.shortcodeAlert.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  shortcode2FA() {
    this._nexmo.shortcode2FA.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  shortcodeMarketing() {
    this._nexmo.shortcodeMarketing.apply(this._nexmo, arguments);
  }
  
}

export default SMS;
