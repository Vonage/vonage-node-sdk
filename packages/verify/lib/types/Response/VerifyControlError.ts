import { CheckStatus } from '../../enums/index.js';

/**
 * Represents an error response for a Verify control operation.
 */
export type VerifyControlErrorResponse = {
  /**
   * The status code indicating the outcome of the operation.
   */
  status: CheckStatus;

  /**
   * The error text providing more information about the error.
   */
  error_text: string;
}
