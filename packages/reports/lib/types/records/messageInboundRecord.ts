import { RecordCommon } from './recordCommon.js';

/**
 * Record for an inbound message received via the Messages API.
 */
export type MessageInboundRecord = {
  /**
   * Currency of the price for receiving the inbound message.
   */
  currency?: string,

  /**
   * Date when Vonage received the message from the messaging provider.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateReceived?: string,

  /**
   * Direction of the message, either `inbound` or `outbound`.
   */
  direction?: string,

  /**
   * Phone number or account that this inbound message was sent from.
   */
  from?: string,

  /**
   * Body of the message. Only present if `include_message` was `true`.
   */
  messageBody?: string,

  /**
   * Vonage's unique identifier for this message.
   */
  messageId?: string,

  /**
   * Network code of the originating phone number. Relevant for
   * `sms` or `mms` provider.
   */
  network?: string,

  /**
   * Name of the originating network code. Relevant for `sms` or `mms`
   * provider.
   */
  networkName?: string,

  /**
   * Messaging provider (e.g. `whatsapp`, `sms`, `mms`).
   */
  provider?: string,

  /**
   * Volume-based pricing tier applied to this record.
   */
  tierVolume?: string,

  /**
   * Phone number or account that the message was sent to.
   */
  to?: string,

  /**
   * Total price for receiving the inbound message.
   */
  totalPrice?: string,
} & RecordCommon;
