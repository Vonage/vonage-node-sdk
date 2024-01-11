/**
 * Error class representing a specific error scenario where an API key is
 * missing in the request.
 *
 * This error is thrown when an API request is made without providing the
 * necessary API key for authentication.
 *
 * @extends {Error}
 */
export class MissingApiKeyError extends Error {
  constructor() {
    super('Missing API Key');
  }
}
