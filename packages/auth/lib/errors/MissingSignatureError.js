/**
 * Error class representing a specific error scenario where a signature
 * algorithm is expected but missing in the request.
 *
 * This error is thrown when an API request is made without providing the
 * necessary signature algorithm for authentication.
 *
 * Users should select a value from the AlgorithmTypes enum.
 *
 * @extends {Error}
 */
export class MissingSignatureError extends Error {
  constructor() {
    super('Missing signature algorithm');
  }
}
