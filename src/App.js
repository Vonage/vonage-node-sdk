"use strict";

import nexmo from './index';

class App {
  
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition App options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
    
    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || nexmo;
    
    this._nexmo.initialize(this.creds.key, this.creds.secret, this.options.debug);
  }
  
  /**
   * base_url='https://rest.nexmo.com'
   * version='/beta'
   * action='/account/applications/?'
   * key='API_KEY'
   * secret='API_SECRET'
   * name='MyFirstApplication'
   * type='voice'
   * answer_url='http://example.com/ncco'
   * event_url='http://example.com/call_status'
   *
   * curl $base_url$version$action \
   * -d api_key=$key \
   * -d api_secret=$secret \
   * -d name=$name \
   * -d type=$type \
   * -d answer_url=$answer_url \
   * -d event_url=$event_url
   *
   * @param {string} name
   *    The name of the application to be created.
   * @param {string} type
   *    The type of application to be created. Presently only `voice`
   *    is supported.
   */ 
  createApplication() {
    this._nexmo.createApplication.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  getApplications() {
    this._nexmo.getApplications.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  getApplication() {
    this._nexmo.getApplication.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  updateApplication() {
    this._nexmo.updateApplication.apply(this._nexmo, arguments);
  }
  
  /**
   * TODO: document
   */
  deleteApplication() {
    this._nexmo.deleteApplication.apply(this._nexmo, arguments);
  }
  
}

export default App;
