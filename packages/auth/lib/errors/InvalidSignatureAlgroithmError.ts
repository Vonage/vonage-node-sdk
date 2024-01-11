/**
 * Error class representing a specific error scenario where an invalid
 * signature algorithm is provided.
 *
 * This error is thrown when an API request is made with a signature
 * algorithm that is not supported or recognized.
 *
 * @extends {Error}
 */
export class InvalidSignatureAlgorithmError extends Error {
  constructor() {
    super('Invalid Signature algorithm');
  }
}
