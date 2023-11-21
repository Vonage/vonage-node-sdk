import { CheckStatus } from '../../enums';

/**
 * Represents the response for a Verify operation.
 */
export type VerifyResponse = {
  /**
   * The unique identifier for the Verify request.
   */
  request_id: string;

  /**
   * The status code indicating the outcome of the operation.
   */
  status: CheckStatus;
}
