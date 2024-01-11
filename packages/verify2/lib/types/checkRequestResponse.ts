/**
 * Represents the response for checking a code against a verification request.
 */
export type CheckRequestResponse = {
  /**
   * The ID of the verification request.
   */
  request_id: string;

  /**
   * The status of the verification request.
   */
  status: string;
};
