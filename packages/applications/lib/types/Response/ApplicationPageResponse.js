/**
 * Represents the response for a paginated list of applications.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} ApplicationPageResponse
 * @property {number} page_size - The number of applications per page.
 * @property {number} page - The current page number (starts at 1).
 * @property {number} total_items - The total number of applications.
 * @property {number} total_pages - The total number of pages returned.
 * @property {Array.<ApplicationResponse>} applications - A list of applications matching your existing filters.
 * @property {Object} _embedded - An object containing a list of applications. A list of applications matching your existing filters.
 */

export {};
