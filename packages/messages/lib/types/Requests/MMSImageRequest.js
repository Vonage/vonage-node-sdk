/**
 * Represents a request for sending an image message via the MMS (Multimedia Messaging Service) channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} MMSImageRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'image'} message_type - The type of the message, which is 'image' for an image message.
 * @property {Object} image - The image content of the message, including the URL of the image and an optional caption. The URL of the image file to be sent in the message. An optional caption or description for the image message.
 * @property {string} to - The recipient's phone number or identifier.
 * @property {string} from - The sender's phone number or identifier.
 * @property {'mms'} channel - The channel through which the message will be sent, which is 'mms' for MMS.
 * @property {number} [ttl] - The amount of time in seconds the message will live for
 */

export {};
