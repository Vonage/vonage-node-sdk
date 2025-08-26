import { CheckStatus } from '../../enums/index.js';

/**
 * Represents the response object for a failed verification check.
 */
export type VerifyCheckErrorResponse = {
  /**
   * The unique identifier for the verification request.
   */
  request_id: string

  /**
   * The status of the verification check.
   */
  status: CheckStatus

  /**
   * The error message associated with the failed verification check.
   */
  error_text: string
}
