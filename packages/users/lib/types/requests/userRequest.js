/**
 * Represents a request to create or update a user's properties.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} UserPropertiesRequest
 * @property {Record} custom_data - Custom key-value pairs associated with the user. @remarks Data here will not have their properties transformed
 */

/**
 * Represents a request to create or update a user's channels.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} UserChannelsRequest
 * @property {Array} websocket - An array of WebSocket channel requests.
 */

/**
 * Represents a request to create or update a user.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} UserRequest
 * @property {string} image_url - The URL of the user's image.
 * @property {UserPropertiesRequest} properties - User properties including custom data.
 */

export {};
