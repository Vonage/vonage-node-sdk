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

  sms?: {
    /**
     * The encoding type to use for the message. If set to either text or
     * unicode the specified type will be used. If set to auto (the default),
     * the Messages API will automatically set the type based on the content
     * of text; i.e. if unicode characters are detected in text, then the
     * message will be encoded as unicode, and otherwise as text.
     *
     * @link https://api.support.vonage.com/hc/en-us/sections/200622473-Country-Specific-Features-and-Restrictions
     */
    encoding_type?: 'unicode' | 'text' | 'auto';

    /**
     * A string parameter that satisfies regulatory requirements when sending
     * an SMS to specific countries.
     */
    content_id?: string;

    /**
     * A string parameter that satisfies regulatory requirements when sending
     * an SMS to specific countries.
     *
     * @link https://api.support.vonage.com/hc/en-us/sections/200622473-Country-Specific-Features-and-Restrictions
     */
    entity_id?: string;
  };
};
