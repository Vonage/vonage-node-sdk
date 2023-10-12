import { SearchCheckInformationResponse } from './SearchCheckInformationResponse';
import { SearchEventInformationResponse } from './SearchEventInformationResponse';
import { SearchStatus } from '../../enums';

/**
 * Represents the response for a Verify search operation.
 */
export type VerifySearchResponse = {
  /**
   * The unique identifier for the Verify request.
   */
  request_id: string;

  /**
   * The account ID associated with the request.
   */
  account_id: string;

  /**
   * The status code indicating the outcome of the search operation.
   */
  status: SearchStatus;

  /**
   * The phone number this verification request was used for.
   */
  number: string;

  /**
   * The cost incurred for this verification request.
   */
  price: string;

  /**
   * The currency code.
   */
  currency: string;

  /**
   * The sender ID provided in the Verify request.
   */
  sender_id: string;

  /**
   * The date and time the verification request was submitted.
   */
  date_submitted: string;

  /**
   * The date and time the verification request was completed.
   */
  date_finalized: string;

  /**
   * The time the first verification attempt was made.
   */
  first_event_date: string;

  /**
   * The time the last verification attempt was made.
   */
  last_event_date: string;

  /**
   * The list of checks made for this verification and their outcomes.
   */
  checks: SearchCheckInformationResponse[];

  /**
   * The events that have taken place to verify this number, and their
   * unique identifiers.
   */
  events: SearchEventInformationResponse[];

  /**
   * The estimated cost of messages sent for the verification process.
   */
  estimated_price_messages_sent: string;
}
