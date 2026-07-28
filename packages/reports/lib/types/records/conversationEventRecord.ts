import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Conversation Event.
 */
export type ConversationEventRecord = {
  /**
   * ID of the Vonage application used.
   */
  applicationId?: string,

  /**
   * Client reference provided when creating the event.
   */
  clientRef?: string,

  /**
   * ID of the conversation associated with the event.
   */
  conversationId?: string,

  /**
   * Date of the event.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  creationDate?: string,

  /**
   * Currency of the price of the request.
   */
  currency?: string,

  /**
   * Price of the request.
   */
  price?: string,

  /**
   * ID of the request.
   */
  requestId?: string,

  /**
   * Total price of the request.
   */
  totalPrice?: string,

  /**
   * User ID in the conversation.
   */
  userId?: string,
} & RecordCommon;
