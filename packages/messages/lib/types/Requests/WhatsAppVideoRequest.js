/**
 * Represents a request for sending a video message via the WhatsApp channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} WhatsAppVideoRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'video'} message_type - The type of the message, which is 'video' for a video message.
 * @property {Object} video - The video content of the message, including the URL and an optional caption. The URL of the video. An optional caption for the video.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'whatsapp'} channel - The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
 */

export {};
