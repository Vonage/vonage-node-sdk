import { SMSStatus } from '../../enums';
/**
 * Interface representing an SMS message response.
 *
 * Describes the structure of a response containing information about an SMS message's status and details.
 */
export type SMSMessageResponse = {
  /**
   * The recipient's phone number in E.164 format.
   */
  to: string;

  /**
   * The unique ID of the SMS message.
   */
  'message-id': string;

  /**
   * The status of the SMS message.
   */
  status: SMSStatus;

  /**
   * Your estimated remaining balance after sending the SMS.
   */
  'remaining-balance': string;

  /**
   * The estimated cost of the SMS message.
   */
  'message-price': string;

  /**
   * The estimated ID of the network of the recipient.
   */
  network: string;

  /**
   * Your client reference for the message (optional).
   */
  'client-ref'?: string;

  /**
   * An optional string used to identify separate accounts using the SMS endpoint for billing purposes (optional).
   */
  'account-ref'?: string;
}
