/**
 * Right now only key/secret credentials are supported.
 * However, in time JWT will also be supported.
 * The `Credentials` object provides an abstraction to this.
 */
class Credentials {
  constructor(key, secret) {
    this.key = key;
    this.secret = secret;
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
      return new Credentials(obj.key, obj.secret);
    }
  }
}

export default Credentials;
