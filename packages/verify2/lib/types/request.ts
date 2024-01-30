/**
 * Represents a request object with a unique request ID.
 */
export type Request = {
  /**
   * The unique identifier for the request.
   */
  requestId: string;

  /**
   * The URL to check the status of the request.
   */
  checkUrl?: string;
};
