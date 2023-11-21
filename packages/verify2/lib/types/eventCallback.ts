import { Channels, EventStatus } from '../enums';

/**
 * Represents an event callback received for a verification request.
 */
export type EventCallback = {
  /**
   * The ID of the verification request associated with the event.
   */
  request_id: string;

  /**
   * The date and time when the event was triggered in ISO 8601 format.
   */
  triggerd_at: string; // Typo: Should be 'triggered_at'

  /**
   * The type of response for the event.
   */
  type: string;

  /**
   * The communication channel for the verification request.
   */
  channel: Channels;

  /**
   * The status of the event.
   */
  status: EventStatus;

  /**
   * The date and time when the verification request was completed
   * in ISO 8601 format.
   */
  finalized_at: string;

  /**
   * (Optional) The client reference given in the original Verify request.
   */
  client_ref?: string;
};
