import querystring from "querystring";

import StreamResource from "./StreamResource";
import TalkResource from "./TalkResource";
import DtmfResource from "./DtmfResource";

/**
 * Provides access to the `calls` resource.
 */
class CallsResource {
  /**
   * The path to the `calls` resource.
   */
  static get PATH() {
    return "/v1/calls";
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

    /**
     * @type DtmfResource
     */
    this.dtmf = new DtmfResource(this.creds, this.options);
  }

  /**
   * Create a new call.
   *
   * @param {Object} params - Parameters used when creating the call. See https://developer.nexmo.com/api/voice#create-an-outbound-call for more information.
   * @param {function} callback - function to be called when the request completes.
   */
  create(params, callback) {
    params = JSON.stringify(params);

    var config = {
      host: "api.nexmo.com",
      path: CallsResource.PATH,
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": params.length,
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);
  }

  /**
   * Get an existing call.
   *
   * @param {string|object} query - The unique identifier for the call to retrieve
   *               or a set of filter parameters for the query. For more information
   *               see https://docs.nexmo.com/voice/voice-api/api-reference#call_retrieve
   * @param {function} callback - function to be called when the request completes.
   */
  get(query, callback) {
    if (!query) {
      throw new Error('"query" is a required parameter');
    }

    var pathExt = "";
    if (typeof query === "string") {
      // single call Id
      pathExt = `/${query}`;
    } else if (typeof query === "object" && Object.keys(query).length > 0) {
      // filter
      pathExt = `?${querystring.stringify(query)}`;
    }

    var config = {
      host: "api.nexmo.com",
      path: `${CallsResource.PATH}${pathExt}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);
  }

  /**
   * Update an existing call.
   *
   * @param {string} [callId] - The unique identifier for the call to update.
   * @param {Object} params - Parameters used when updating the call. See https://developer.nexmo.com/api/voice#modify-an-existing-call for more information.
   * @param {function} callback - function to be called when the request completes.
   */
  update(callId, params, callback) {
    params = JSON.stringify(params);

    var config = {
      host: "api.nexmo.com",
      path: `${CallsResource.PATH}/${callId}`,
      method: "PUT",
      body: params,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": params.length,
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);
  }
}

export default CallsResource;
