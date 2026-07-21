import { RecordCommon } from './recordCommon.js';

/**
 * Record for an SMS Traffic Control event.
 */
export type SMSTrafficControlRecord = {
  /**
   * Vonage's unique identifier for the SMS message.
   */
  messageId?: string,

  /**
   * Duration the message spent in the Vonage queue in milliseconds.
   */
  queueDuration?: string,

  /**
   * Date and time when the message was placed in the Vonage queue.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  queuedTime?: string,

  /**
   * Queue status of the message. Either `queued` or `dequeued`.
   */
  status?: string,
} & RecordCommon;
