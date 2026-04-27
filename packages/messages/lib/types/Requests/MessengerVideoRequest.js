/**
 * Represents a request for sending a video message via the Messenger channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} MessengerVideoRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'video'} message_type - The type of the message, which is 'video' for a video message.
 * @property {Object} video - The video content of the message. The URL of the video to be sent in the message.
 * @property {string} to - The recipient's phone number or identifier.
 * @property {string} from - The sender's phone number or identifier.
 * @property {'messenger'} channel - The channel through which the message will be sent, which is 'messenger' for Messenger.
 * @property {MessengerType} messenger - Additional information specific to the Messenger channel.
 */

export {};
