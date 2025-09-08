import { VerifySearchResponse } from './Response/index.js';
import { VerifySearchCheck } from './VerifySearchCheck.js';

/**
 * Represents the response for a Verify search operation.
 */
export type VerifySearch = Omit<VerifySearchResponse, 'checks'> & {
  /**
   * The unique identifier for the Verify request.
   */
  requestId: string;

  /**
   * The Vonage account ID associated with the request.
   */
  accountId: string;

  /**
   * The sender ID provided in the Verify request.
   */
  senderId: string;

  /**
   * The date and time the verification request was submitted in the
   * format 'YYYY-MM-DD HH:MM:SS'.
   */
  dateSubmitted: string;

  /**
   * The date and time the verification request was completed in the
   * format 'YYYY-MM-DD HH:MM:SS'.
   */
  dateFinalized: string;

  /**
   * (Optional) The time the first verification attempt was made in the
   * format 'YYYY-MM-DD HH:MM:SS'.
   */
  firstEventDate?: string;

  /**
   * (Optional) The time the last verification attempt was made in the
   * format 'YYYY-MM-DD HH:MM:SS'.
   */
  lastEventDate?: string;

  /**
   * The list of verification checks made for this verification and
   * their outcomes.
   */
  checks: VerifySearchCheck[];

  /**
   * The estimated cost of messages sent during the verification process.
   */
  estimatedPriceMessagesSent: string;
}
