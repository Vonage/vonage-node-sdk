/**
 * `MissingPrivateKeyError` class for throwing an error when the private key
 * is missing. The private key must either be the string of the key or a buffer
 * from the key file. When you created the application, the private key would
 * have been downloaded then. If you lost the key, you will need to regenrate
 * the key.
 *
 * @extends {Error}
 */
export class MissingPrivateKeyError extends Error {
  constructor() {
    super('Missing private key');
  }
}
