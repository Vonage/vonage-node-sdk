import { RecordCommon } from './recordCommon.js';

/**
 * Record for an In-App Voice call event.
 */
export type InAppVoiceRecord = {
  /**
   * ID of the Vonage application used.
   */
  applicationId?: string,

  /**
   * Client reference provided when initiating the call.
   */
  clientRef?: string,

  /**
   * Conversation ID associated with the call.
   */
  conversationId?: string,

  /**
   * Currency of the price of the request.
   */
  currency?: string,

  /**
   * Date and time the call ended.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateEnd?: string,

  /**
   * Date and time the call started.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateStart?: string,

  /**
   * Duration of the call in seconds.
   */
  duration?: string,

  /**
   * ID of the call leg.
   */
  legId?: string,

  /**
   * Price of the request.
   */
  price?: string,

  /**
   * ID of the request (same as `id` in RecordCommon).
   */
  requestId?: string,

  /**
   * Status of the call termination.
   */
  status?: string,

  /**
   * Total price of the request.
   */
  totalPrice?: string,

  /**
   * User ID in the conversation.
   */
  userId?: string,
} & RecordCommon;
