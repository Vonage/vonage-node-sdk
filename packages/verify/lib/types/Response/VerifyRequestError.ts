/**
 * Represents an error response for a Verify request operation.
 */
export type VerifyRequestErrorResponse = {
  /**
   * (Optional) The unique identifier for the Verify request.
   */
  request_id?: string;

  /**
   * The status code indicating the outcome of the operation.
   */
  status: string;

  /**
   * The error text providing more information about the error.
   */
  error_text: string;

  /**
   * (Optional) The network associated with the error.
   */
  network?: string;
}
