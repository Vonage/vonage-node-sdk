import { VetchResponse, VetchOptions } from '../types';

/**
 * Class representing an error from a Vetch API request. Extends the built-in
 * Error class and adds additional properties related to the API request and
 * response.
 *
 * @template T - The type of the data payload in the VetchResponse, expected to be an object that has been decoded from JSON or WebForm.
 *
 * @property {string} [code] - An optional error code.
 * @property {VetchOptions} config - Configuration options for the API request.
 * @property {VetchResponse<T>} response - The API response that resulted in the error.
 */
export class VetchError<T> extends Error {
  code?: string;
  config: VetchOptions;
  response!: VetchResponse<T>;

  /**
   * Creates an instance of VetchError.
   *
   * @param {string} message - The error message.
   * @param {VetchOptions} options - Configuration options for the API request.
   */
  constructor(message: string, options: VetchOptions) {
    super(message);
    this.config = options;
  }
}
