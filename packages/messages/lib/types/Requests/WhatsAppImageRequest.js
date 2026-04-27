/**
 * Represents a request for sending an image message via the WhatsApp channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} WhatsAppImageRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'image'} message_type - The type of the message, which is 'image' for an image message.
 * @property {Object} image - The image content of the message, including the URL of the image and an optional caption. The URL of the image to be sent. An optional caption for the image.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'whatsapp'} channel - The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
 * @property {number} [ttl] - The amount of time in seconds the message will live for
 */

export {};
