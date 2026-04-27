/**
 * Represents the response for a page of call details, including information
 * about the page itself and an array of call details.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} CallPageResponse
 * @property {number} count - The total count of call details in the response.
 * @property {number} page_size - The number of call details per page.
 * @property {number} record_index - The index of the first call detail in the current page.
 * @property {Object} _embedded - An embedded object containing an array of call details. An array of call details.
 */

export {};
