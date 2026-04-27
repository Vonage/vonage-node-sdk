/**
 * Represents a request to send an audio message via the Messenger channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure request structure before it's transformed into `snake_case` for the API call.
 *
 * @typedef {Object} MessengerAudioRequest
 * @property {string} client_ref - A client reference string for tracking the message.
 * @property {'audio'} message_type - The message type, which is set to 'audio' for an audio message.
 * @property {Object} audio - The audio content of the message, including the URL of the audio file. The URL of the audio file.
 * @property {string} to - The recipient of the message.
 * @property {string} from - The sender of the message.
 * @property {'messenger'} channel - The channel for sending the message, which is set to 'messenger'.
 * @property {MessengerType} messenger - Additional details about the Messenger message type.
 */

export {};
