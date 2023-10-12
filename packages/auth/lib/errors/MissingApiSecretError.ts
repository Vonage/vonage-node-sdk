/**
 * Error class representing a specific error scenario where an API secret is
 * missing in the request.
 *
 * This error is thrown when an API request is made without providing the
 * necessary API secret for authentication.
 *
 * @extends {Error}
 */
export class MissingApiSecretError extends Error {
  constructor() {
    super('Missing API Secret');
  }
}
