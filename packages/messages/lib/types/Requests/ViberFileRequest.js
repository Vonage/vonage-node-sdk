/**
 * Represents a request for sending a file message via the Viber Service channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} ViberFileRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'file'} message_type - The type of the message, which is 'file' for a file message.
 * @property {Object} file - The file content to be sent, including the URL and name. The URL of the file to be sent. The name of the file.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'viber_service'} channel - The channel through which the message will be sent, which is 'viber_service' for Viber Service.
 * @property {ViberService} viber_service - The Viber service configuration.
 */

export {};
