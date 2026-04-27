/**
 * Interface representing an inbound SMS message.
 * Describes the structure of an inbound SMS message, including its properties and details.
 *
 * @typedef {Object} InboundMessage
 * @property {string} msisdn - The phone number that this inbound message was sent from in E.164 format.
 * @property {string} to - The phone number the message was sent to (virtual number) in E.164 format.
 * @property {string} messageId - The unique ID of the inbound message.
 * @property {string} text - The message body for this inbound message.
 * @property {TypeEnum | string} type - The format of the message body.
 * @property {string} keyword - The first word in the message body, converted to uppercase.
 * @property {string} timestamp - A Unix timestamp representation of 'message-timestamp'.
 * @property {string} nonce - A random string that forms part of the signed set of parameters for validation.
 * @property {string} concat - Indicates whether this is a concatenated message.
 * @property {string} data - The content of this message, if the type is binary.
 * @property {string} udh - The hex encoded User Data Header, if the type is binary.
 */

export {};
