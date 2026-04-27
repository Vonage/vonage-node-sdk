/**
 * Represents a request for sending a custom message via the WhatsApp channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} WhatsAppCustomRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'custom'} message_type - The type of the message, which is 'custom' for a custom message.
 * @property {Record} custom - The custom content of the message as a record of unknown type.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'whatsapp'} channel - The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
 */

export {};
