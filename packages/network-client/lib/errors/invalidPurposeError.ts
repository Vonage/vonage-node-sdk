/* istanbul ignore next */
/**
 * Error thrown when purpose is invalid
 */
export class InvalidPurposeError extends Error {
  constructor() {
    super('You did not set a purpose for this request. Please set a proper purpose for this request.');
  }
}
