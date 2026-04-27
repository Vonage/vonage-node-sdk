/**
 * Represents a request for sending a video message via the Viber Service channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} ViberVideoRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'video'} message_type - The type of the message, which is 'video' for a video message.
 * @property {Object} video - The video content of the message, including its URL and optional caption and thumbnail URL. The URL of the video. An optional caption for the video. An optional URL for the video's thumbnail.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'viber_service'} channel - The channel through which the message will be sent, which is 'viber_service' for Viber Service.
 * @property {ViberService} viber_service - The Viber service configuration.
 */

export {};
