/**
 * Error class representing a specific error scenario where a user selects
 * an invalid or unsupported signature algorithm.
 *
 * This error is thrown when an API request is made with a signature
 * algorithm that is not present in the AlgorithmTypes enum.
 *
 * @extends {Error}
 *
 * @example
 * if (!Object.values(AlgorithmTypes).includes(algorithm)) {
 *   throw new InvalidSignatureError();
 * }
 */
export class InvalidSignatureError extends Error {
  constructor() {
    super('Invalid Signature algorithm');
  }
}
