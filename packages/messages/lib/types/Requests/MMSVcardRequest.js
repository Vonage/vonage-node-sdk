/**
 * Represents a request for sending a vCard message via the MMS (Multimedia Messaging Service) channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} MMSVcardRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'vcard'} message_type - The type of the message, which is 'vcard' for a vCard message.
 * @property {Object} vcard - The vCard content of the message, including the URL of the vCard file. The URL of the vCard file to be sent in the message.
 * @property {string} to - The recipient's phone number or identifier.
 * @property {string} from - The sender's phone number or identifier.
 * @property {'mms'} channel - The channel through which the message will be sent, which is 'mms' for MMS.
 */

export {};
