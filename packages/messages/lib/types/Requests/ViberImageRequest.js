/**
 * Represents a request for sending an image message via the Viber Service channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} ViberImageRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'image'} message_type - The type of the message, which is 'image' for an image message.
 * @property {Object} image - The image content to be sent, including the URL and optional caption. The URL of the image to be sent. An optional caption for the image.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'viber_service'} channel - The channel through which the message will be sent, which is 'viber_service' for Viber Service.
 * @property {ViberService} viber_service - The Viber service configuration.
 */

export {};
