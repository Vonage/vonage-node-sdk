/**
 * Error thrown when scope is invalid
 */
export class InvalidScopeError extends Error {
  constructor() {
    super(`You did not set a scope for this request. Please set a proper scope for this request.`);
  }
}
