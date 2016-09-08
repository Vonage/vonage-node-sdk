"use strict";

class Voice {
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition Voice options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
  }
  
  /**
   * Make a call using the Nexmo Voice API.
   * For full details of parameters see https://docs.nexmo.com/voice/voice-api/api-reference#call_create
   * @param {Object} params - Call parameters
   * @param {function} callback - callback executed when either an error occurs
   *                      or the request to the API succeeds.
   */
  call(params, callback) {
    var config = {
      host:'api.nexmo.com',
      path:'/beta/calls',
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);
  }
    
}

export default Voice;
