/**
 * Type defining configuration parameters for API requests.
 *
 * @typedef {Object} ConfigParams
 * @property {string} [restHost] - The host for REST API requests.
 * @property {string} [apiHost] - The host for general API requests.
 * @property {string} [videoHost] - The host for video-related API requests.
 * @property {ResponseTypes} [responseType] - The desired response type for API requests. @deprecated The client will now use the `content-type` header to decode the response properly
 * @property {number} [timeout] - The maximum time, in milliseconds, to wait for API responses.
 * @property {string} [meetingsHost] - The host for meetings-related API requests.
 * @property {string} [identityInsightsHost] - European host
 * @property {string} [appendUserAgent] - A string to append to the User-Agent header in API requests.
 */

export {};
