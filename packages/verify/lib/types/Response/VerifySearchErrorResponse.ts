import { SearchStatus } from '../../enums/index.js';

/**
 * Represents an error response for a Verify search operation.
 */
export type VerifySearchErrorResponse = {
  /**
   * The unique identifier for the Verify request.
   */
  request_id: string;

  /**
   * The status code indicating the outcome of the search operation.
   */
  status: SearchStatus;

  /**
   * The error text providing more information about the error.
   */
  error_text: string;
}
