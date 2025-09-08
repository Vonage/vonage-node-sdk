import { VerifyCheckResponse } from './Response/index.js';

/**
 * Represents a verification check result as part of a Verify search operation.
 */
export type VerifySearchCheck = VerifyCheckResponse & {
  /**
   * The date and time this check was received in the format
   * 'YYYY-MM-DD HH:MM:SS'.
   */
  dateReceived: string;

  /**
   * The IP address associated with this verification check.
   */
  ipAddress: string;
}
