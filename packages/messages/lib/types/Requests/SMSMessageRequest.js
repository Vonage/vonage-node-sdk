/**
 * Represents a request for sending a text message via the SMS (Short Message Service) channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} SMSMessageRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'text'} message_type - The type of the message, which is 'text' for a text message.
 * @property {string} text - The text content of the message.
 * @property {string} to - The recipient's phone number.
 * @property {string} from - The sender's phone number or identifier.
 * @property {'sms'} channel - The channel through which the message will be sent, which is 'sms' for SMS.
 * @property {Object} [sms] - The encoding type to use for the message. If set to either text or unicode the specified type will be used. If set to auto (the default), the Messages API will automatically set the type based on the content of text; i.e. if unicode characters are detected in text, then the message will be encoded as unicode, and otherwise as text. @link https://api.support.vonage.com/hc/en-us/sections/200622473-Country-Specific-Features-and-Restrictions A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. @link https://api.support.vonage.com/hc/en-us/sections/200622473-Country-Specific-Features-and-Restrictions
 */

export {};
