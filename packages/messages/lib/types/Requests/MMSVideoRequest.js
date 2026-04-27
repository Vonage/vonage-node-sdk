/**
 * Represents a request for sending a video message via the MMS (Multimedia Messaging Service) channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} MMSVideoRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'video'} message_type - The type of the message, which is 'video' for a video message.
 * @property {Object} video - The video content of the message, including the URL of the video file and an optional caption. The URL of the video file to be sent in the message. An optional caption for the video.
 * @property {string} to - The recipient's phone number or identifier.
 * @property {string} from - The sender's phone number or identifier.
 * @property {'mms'} channel - The channel through which the message will be sent, which is 'mms' for MMS.
 */

export {};
