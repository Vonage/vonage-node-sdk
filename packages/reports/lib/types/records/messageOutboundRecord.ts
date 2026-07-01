import { RecordCommon } from './recordCommon.js';

/**
 * Record for an outbound message sent via the Messages API.
 */
export type MessageOutboundRecord = {
  /**
   * Client reference provided when sending the message.
   */
  clientRef?: string,

  /**
   * ISO two-letter country code of the destination number.
   */
  country?: string,

  /**
   * Country name of the destination country code.
   */
  countryName?: string,

  /**
   * Currency of the price of the message request.
   */
  currency?: string,

  /**
   * Date when the message reached its current state.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateFinalized?: string,

  /**
   * Date when Vonage received the Messages API request.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateReceived?: string,

  /**
   * Direction of the message, either `inbound` or `outbound`.
   */
  direction?: string,

  /**
   * Error code of the message. Available when status is `rejected`.
   */
  errorCode?: string,

  /**
   * Price estimated before any delivery receipt was received.
   * Not available for WhatsApp provider.
   */
  estimatedPrice?: string,

  /**
   * Phone number or account that the message was sent from.
   */
  from?: string,

  /**
   * Latency of the message request in milliseconds.
   */
  latency?: string,

  /**
   * Body of the message. Only present if `include_message` was `true`.
   */
  messageBody?: string,

  /**
   * Vonage's unique identifier for this message.
   */
  messageId?: string,

  /**
   * Network code of the destination phone number. Relevant for
   * `sms` or `mms` provider.
   */
  network?: string,

  /**
   * Name of the destination network code. Relevant for `sms` or `mms`
   * provider.
   */
  networkName?: string,

  /**
   * Vonage pricing model applied (e.g. `single message`).
   */
  pricingModel?: string,

  /**
   * Provider pricing type. Available for WhatsApp only, showing
   * Meta's pricing type.
   */
  pricingType?: string,

  /**
   * Messaging provider (e.g. `whatsapp`, `sms`, `mms`).
   */
  provider?: string,

  /**
   * Error code sent to Vonage from the messaging channel's provider.
   */
  providerErrorCode?: string,

  /**
   * Volume-based pricing tier applied to this record.
   */
  tierVolume?: string,

  /**
   * Phone number or account that the message was sent to.
   */
  to?: string,

  /**
   * Total price calculated after delivery receipt was received.
   */
  totalPrice?: string,

  /**
   * ID of the messaging session. Available for WhatsApp provider.
   */
  sessionId?: string,

  /**
   * Type of the messaging session. Available for WhatsApp provider.
   */
  sessionType?: string,

  /**
   * Unique ID for the failover workflow.
   */
  workflowId?: string,

  /**
   * Sequence of this message in the workflow (e.g. `1` for primary,
   * `2` for the first failover).
   */
  workflowItemsNumber?: string,

  /**
   * Total number of messages attempted in this workflow.
   */
  workflowItemsTotal?: string,
} & RecordCommon;
