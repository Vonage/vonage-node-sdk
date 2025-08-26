import { VerifyRequestResponse } from './Response/index.js';

/**
 * Represents a Verify request with an additional requestId property.
 */
export type VerifyRequest = VerifyRequestResponse & {
  /**
   * The unique identifier for the Verify request.
   */
  requestId: string;
}
