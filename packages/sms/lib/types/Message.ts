import { SMSMessageResponse } from './Responses';

/**
 * Interface representing an SMS message.
 *
 * Extends the structure of an SMS message response and includes additional optional properties.
 *
 * @extends {SMSMessageResponse}
 */
export type Message = SMSMessageResponse & {
  /**
   * The unique ID of the SMS message (optional).
   */
  messageId?: string;

  /**
   * Your estimated remaining balance after sending the SMS (optional).
   */
  remainingBalance?: string;

  /**
   * The estimated cost of the SMS message (optional).
   */
  messagePrice?: string;

  /**
   * Your client reference for the message (optional).
   */
  clientRef?: string;

  /**
   * An optional string used to identify separate accounts using the SMS endpoint for billing purposes (optional).
   */
  accountRef?: string;
}
