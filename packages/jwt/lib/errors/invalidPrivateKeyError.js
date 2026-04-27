/**
 * `InvalidPrivateKeyError` class for throwing an error when the private key
 * is invalid. The private key must either be the string of the key or a buffer
 * from the key file. When you created the application, the private key would
 * have been downloaded then. If you lost the key, you will need to regenrate
 * the key.
 *
 * @extends {Error}
 */
export class InvalidPrivateKeyError extends Error {
  constructor() {
    super('Private key must be a string or buffer');
  }
}
