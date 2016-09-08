import querystring from 'querystring';

import StreamResource from './StreamResource';
import TalkResource from './TalkResource';

/**
 * Provides access to the `calls` resource.
 */
class CallsResource {
  
  /**
   * The path to the `calls` resource.
   */
  static get PATH() {
    return '/beta/calls';
  }
  
  /**
   * Creates a new CallsResource.
   *
   * @param {Credentials} creds - Credentials used when interacting with the Nexmo API.
   * @param {Object} options - additional options for the class.
   */
  constructor(creds, options) {
    this.creds = creds;
    this.options = options;
    
    /**
     * @type StreamController
     */
    this.stream = new StreamResource(this.creds, this.options);
    
    /**
     * @type TalkResource
     */
    this.talk = new TalkResource(this.creds, this.options);
  }
  
  /**
   * Create a new call.
   *
   * @param {Object} params - Parameters used when creating the call. See https://docs.dev.nexmoinc.net/voice/voice-api/api-reference#call_create for more information.
   * @param {function} callback - function to be called when the request completes.
   */
  create(params, callback) {
    var config = {
      host: 'api.nexmo.com',
      path: CallsResource.PATH,
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);
  }
  
  /**
   * Get an existing call.
   *
   * @param {string} [callId] - The unique identifier for the call to retrieve. Optional.
   * @param {function} callback - function to be called when the request completes.
   */
  get(callId, callback) {
    if(callback === undefined) {
      callback = callId;
      callId = null;
    }
    
    var pathExt = (callId? `/${callId}`: '');
    var config = {
      host:'api.nexmo.com',
      path:`${CallsResource.PATH}${pathExt}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);
  }
  
  /**
   * Update an existing call.
   *
   * @param {string} [callId] - The unique identifier for the call to update.
   * @param {Object} params - Parameters used when updating the call. See https://docs.dev.nexmoinc.net/voice/voice-api/api-reference#call_modify_single for more information.
   * @param {function} callback - function to be called when the request completes.
   */
  update(callId, params, callback) {
    var config = {
      host:'api.nexmo.com',
      path:`${CallsResource.PATH}/${callId}`,
      method: 'PUT',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);  
  }
  
}

export default CallsResource;
