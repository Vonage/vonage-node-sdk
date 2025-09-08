import { VerifySearchErrorResponse } from './Response/index.js';

/**
 * Represents an error response for a Verify search operation.
 */
export type VerifySearchError = VerifySearchErrorResponse & {
  /**
   * The unique identifier for the Verify request that resulted in an error.
   */
  requestId: string;

  /**
   * A descriptive error message providing more information about the error.
   */
  errorText: string;
}
