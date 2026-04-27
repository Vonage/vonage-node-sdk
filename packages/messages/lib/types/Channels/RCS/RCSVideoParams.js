/**
 * Represents the parameters for sending a video message using RCS.
 *
 * @typedef {Object} RCSVideoParams
 * @property {MessageTypes.VIDEO | string} messageType
 * @property {MessageVideoType} video
 * @property {Channels.RCS | string} [channel] - The channel to send to. You must provide `rcs` in this field.
 * @property {number} [ttl] - The duration in seconds the delivery of a message will be attempted. By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.
 */

export {};
