import { VetchOptions } from '../types';
import { Response } from 'node-fetch';

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
export class VetchError extends Error {
  code?: string;
  config: VetchOptions;
  response?: Response;

  /**
   * Creates an instance of VetchError.
   *
   * @param {string} message - The error message.
   * @param {VetchOptions} options - Configuration options for the API request.
   * @param {VetchResponse} response - Configuration options for the API request.
   */
  constructor(message: string, options: VetchOptions, response?: Response) {
    super(message);
    this.config = options;
    this.response = response;
  }
}
