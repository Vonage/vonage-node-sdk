/**
 * Error thrown when purpose is invalid
 */
export class MissingPurposeError extends Error {
  constructor() {
    super(`You did not set a purpose for this request.`);
  }
}
