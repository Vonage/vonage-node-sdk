/**
 * Error thrown when no scope is set for a request.
 */
export class MissingScopeError extends Error {
  constructor() {
    super('You did not set a scope for this request.');
  }
}
