/**
 * Represents a request for sending a text message via the SMS (Short Message Service) channel.
 *
 * @group SMS
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type SMSMessageRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'text' for a text message.
   */
  message_type: 'text';

  /**
   * The text content of the message.
   */
  text: string;

  /**
   * The recipient's phone number.
   */
  to: string;

  /**
   * The sender's phone number or identifier.
   */
  from: string;

  /**
   * The channel through which the message will be sent, which is 'sms' for SMS.
   */
  channel: 'sms';
}
