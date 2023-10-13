/**
 * Error class representing a specific error scenario where an API secret is
 * provided but is not a valid string.
 *
 * This error is thrown when an API request is made with an API secret that
 * does not meet the expected format or type (string).
 *
 * @extends {Error}
 *
 * @example
 * if (typeof apiSecret !== 'string') {
 *   throw new InvalidApiSecretError();
 * }
 */
export class InvalidApiSecretError extends Error {
  constructor() {
    super('API Secret must be a string');
  }
}
