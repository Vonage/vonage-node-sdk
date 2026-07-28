import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Conversation Message event.
 */
export type ConversationMessageRecord = {
  /**
   * ID of the Vonage application used.
   */
  applicationId?: string,

  /**
   * Client reference provided when sending the message.
   */
  clientRef?: string,

  /**
   * ID of the conversation associated with the message.
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
   * Channel through which the message was sent (e.g. `app`).
   */
  fromChannel?: string,

  /**
   * Member ID of the message sender.
   */
  fromMemberId?: string,

  /**
   * Message sequence number within the conversation.
   */
  fromMessageId?: string,

  /**
   * User ID of the message sender.
   */
  fromUserId?: string,

  /**
   * JSON fragment of other related IDs for this event (e.g. request
   * ID, conversation event ID, message sequence number).
   */
  otherIds?: string,

  /**
   * Price of the request.
   */
  price?: string,

  /**
   * Total price of the request.
   */
  totalPrice?: string,

  /**
   * Trace identifier for this event.
   */
  traceId?: string,
} & RecordCommon;
