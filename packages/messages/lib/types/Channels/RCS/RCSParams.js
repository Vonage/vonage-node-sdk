/**
 * @typedef {Object} RCSSettings
 * @property {RCSCategory} category - A categery describing the type of content contained in the RCS message. This is required when sending RCS messages in certain countries in order to comply with regional regulations and contractual agreements. If you are unsure about the restrictions and required categories for the country you are senidng to, please contact your Vonage Account Manager.
 */

/**
 * @typedef {Object} RCSParams
 * @property {Channels.RCS | string} channel
 * @property {number} [ttl]
 * @property {RCSSettings} [rcs] - An object of optional settings for the RCS message.
 */

export {};
