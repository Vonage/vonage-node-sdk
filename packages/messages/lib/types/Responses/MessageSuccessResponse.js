/**
 * Represents a successful response received when sending a message.
 * This type includes a `message_uuid` field, which is a unique identifier for the sent message.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} MessageSuccessResponse
 * @property {string} message_uuid - A unique identifier for the sent message.
 */

export {};
