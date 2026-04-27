/**
 * Class representing an error from an API request. Extends the built-in
 * Error class and adds additional properties related to the API request and
 * response.
 *
 * @property {string} [code] - An optional error code.
 * @property {Object} config - Configuration options for the API request.
 * @property {Response} [response] - The API response that resulted in the error.
 */
export class VetchError extends Error {
  /**
   * Creates an instance of VetchError.
   *
   * @param {string} message - The error message.
   * @param {Object} options - Configuration options for the API request.
   * @param {Response} [response] - The fetch Response that resulted in the error.
   */
  constructor(message, options, response) {
    super(message);
    this.name = 'VetchError';
    this.config = options;
    this.response = response;
  }
}
