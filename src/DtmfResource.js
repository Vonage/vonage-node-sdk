/**
 * Provides access to the `dtmf` resource.
 */
class DtmfResource {
  /**
   * The path to the `dtmf` resource.
   */
  static get PATH() {
    return "/v1/calls/{call_uuid}/dtmf";
  }

  /**
   * Creates a new DtmfResource.
   *
   * @param {Credentials} creds - Credentials used when interacting with the Nexmo API.
   * @param {Object} options - additional options for the class.
   */
  constructor(creds, options) {
    this.creds = creds;
    this.options = options;
  }

  /**
   * Sends DTMF to a call.
   *
   * @param {Object} params - Parameters used when sending the dtmf to the call. See https://developer.nexmo.com/api/voice#dtmf for more information.
   * @param {function} callback - function to be called when the request completes.
   */
  send(callId, params, callback) {
    params = JSON.stringify(params);

    var config = {
      host: "api.nexmo.com",
      path: DtmfResource.PATH.replace("{call_uuid}", callId),
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

export default DtmfResource;
