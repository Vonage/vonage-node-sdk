/**
 * Represents the response data for a page of media items.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} MediaItemPageResponse
 * @property {number} page_size - The amount of records returned in this response.
 * @property {number} page_index - The page_index used in your request.
 * @property {number} count - The total number of records returned by your request.
 * @property {Object} _embedded - A collection of media items.
 */

export {};
