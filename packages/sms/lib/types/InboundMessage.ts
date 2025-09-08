import { TypeEnum } from '../enums/index.js';

/**
 * Interface representing an inbound SMS message.
 *
 * Describes the structure of an inbound SMS message, including its properties and details.
 */
export type InboundMessage = {
  /**
   * The Vonage API Key of the receiving account.
   */
  'api-key': string;

  /**
   * The phone number that this inbound message was sent from in E.164 format.
   */
  msisdn: string;

  /**
   * The phone number the message was sent to (virtual number) in E.164 format.
   */
  to: string;

  /**
   * The unique ID of the inbound message.
   */
  messageId: string;

  /**
   * The message body for this inbound message.
   */
  text: string;

  /**
   * The format of the message body.
   */
  type: TypeEnum | string;

  /**
   * The first word in the message body, converted to uppercase.
   */
  keyword: string;

  /**
   * The time when Vonage started to push this Inbound SMS to your webhook endpoint.
   */
  'message-timestamp': string;

  /**
   * A Unix timestamp representation of 'message-timestamp'.
   */
  timestamp: string;

  /**
   * A random string that forms part of the signed set of parameters for validation.
   */
  nonce: string;

  /**
   * Indicates whether this is a concatenated message.
   */
  concat: string;

  /**
   * The transaction reference for concatenated messages.
   */
  'concat-ref': string;

  /**
   * The total number of parts in this concatenated message.
   */
  'concat-total': string;

  /**
   * The number of this part in the concatenated message.
   */
  'concat-part': string;

  /**
   * The content of this message, if the type is binary.
   */
  data: string;

  /**
   * The hex encoded User Data Header, if the type is binary.
   */
  udh: string;
}
