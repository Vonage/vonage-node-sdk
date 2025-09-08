import { CheckStatus } from '../enums/index.js';

/**
 * Represents an error that occurred during the verification control process.
 */
export type VerifyControlError = {
  /**
   * The status of the verification control.
   */
  status: CheckStatus;

  /**
   * The error message associated with the verification control error.
   */
  errorText: string;
}
