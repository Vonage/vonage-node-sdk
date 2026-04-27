/**
 * Interface representing the request body for sending an SMS.
 * Describes the structure of the request body used when sending an SMS message.
 *
 * @typedef {Object} SMSRequestBody
 * @property {string} to - The recipient's phone number in E.164 format.
 * @property {string} from - The Alphanumeric senderID (if supported for the destination) or virtual number (specified in E.164 format) that the SMS is being sent from.
 * @property {string} [text] - The body of the message being sent (optional).
 * @property {string} [body] - Hex-encoded binary data (optional).
 */

export {};
