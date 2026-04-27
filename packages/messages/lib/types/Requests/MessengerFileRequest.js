/**
 * Represents a request to send a file message via the Messenger channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure request structure before it's transformed into `snake_case` for the API call.
 *
 * @typedef {Object} MessengerFileRequest
 * @property {string} client_ref - A client reference string for tracking the message.
 * @property {'file'} message_type - The message type, which is set to 'file' for a file message.
 * @property {Object} file - The file content of the message, including the URL of the file. The URL of the file.
 * @property {string} to - The recipient of the message.
 * @property {string} from - The sender of the message.
 * @property {'messenger' | string} channel - The channel for sending the message, which is set to 'messenger'.
 * @property {MessengerType} messenger - Additional details about the Messenger message type.
 */

export {};
