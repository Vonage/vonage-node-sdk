/**
 * Represents a request for sending an audio message via the WhatsApp channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} WhatsAppAudioRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'audio'} message_type - The type of the message, which is 'audio' for an audio message.
 * @property {Object} audio - The audio content of the message, including its URL. The URL of the audio.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'whatsapp' | string} channel - The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
 */

export {};
