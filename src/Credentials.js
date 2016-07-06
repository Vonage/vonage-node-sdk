/**
 * Right now only key/secret credentials are supported.
 * However, in time JWT will also be supported.
 * The `Credentials` object provides an abstraction to this.
 */
class Credentials {
  constructor(apiKey, apiSecret) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }
  
  /**
   * Ensures a credentials instance is used.
   * 
   * Key/Secret credentials are only supported at present.
   */
  static parse(obj) {
    if(obj instanceof Credentials) {
      return obj;
    }
    else {
      return new Credentials(obj.apiKey, obj.apiSecret);
    }
  }
}

export default Credentials;
