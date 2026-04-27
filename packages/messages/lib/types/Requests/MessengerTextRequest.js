/**
 * Represents a request for sending a text message via the Messenger channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} MessengerTextRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'text'} message_type - The type of the message, which is 'text' for a text message.
 * @property {string} text - The text content of the message.
 * @property {string} to - The recipient's phone number or identifier.
 * @property {string} from - The sender's phone number or identifier.
 * @property {'messenger'} channel - The channel through which the message will be sent, which is 'messenger' for Messenger.
 * @property {MessengerType} messenger - Additional information specific to the Messenger channel.
 */

export {};
