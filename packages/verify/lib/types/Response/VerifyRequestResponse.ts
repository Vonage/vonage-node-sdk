/**
 * Represents the response for a Verify request operation.
 */
export type VerifyRequestResponse = {
  /**
   * The unique identifier for the Verify request.
   */
  request_id: string;

  /**
   * The status code indicating the outcome of the operation.
   */
  status: string;
}
