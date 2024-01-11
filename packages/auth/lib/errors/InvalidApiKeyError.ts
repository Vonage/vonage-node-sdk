/**
 * Error class representing a specific error scenario where an API key is
 * provided but is not a valid string.
 *
 * This error is thrown when an API request is made with an API key that
 * does not meet the expected format or type (string).
 *
 * @extends {Error}
 */
export class InvalidApiKeyError extends Error {
  constructor() {
    super('API Key must be a string');
  }
}
