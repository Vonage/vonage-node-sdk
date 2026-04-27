/**
 * Represents the parameters for sending a text message using RCS.
 *
 * @typedef {Object} RCSTextParams
 * @property {Channels.RCS | string} [channel] - The channel to send to. You must provide `rcs` in this field.
 * @property {string} text - The text of the message to send. Limited to 3072 characters, including unicode.
 * @property {number} [ttl] - The duration in seconds the delivery of a message will be attempted. By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.
 * @property {Array} [suggestions] - An array of suggestion objects to include with the message. You can include up to 11 suggestions per message.
 */

export {};
