/**
 * Represents a request for sending a file message via the WhatsApp channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} WhatsAppFileRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'file'} message_type - The type of the message, which is 'file' for a file message.
 * @property {Object} file - The file content of the message, including the URL of the file and an optional caption. The URL of the file to be sent. An optional caption for the file.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'whatsapp'} channel - The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
 */

export {};
