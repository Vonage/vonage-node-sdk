/**
 * Represents a response for a verification request.
 */
export type VerificationResponse = {
  /**
   * The unique identifier for the verification request.
   */
  request_id: string;

  /**
   * The URL for checking the status of the verification request.
   */
  check_url?: string;
};
