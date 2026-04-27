/**
 * Represents the response for retrieving call details.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} CallDetailResponse
 * @property {string} conversation_uuid - The UUID of the conversation associated with the call.
 * @property {string} start_time - The start time of the call.
 * @property {string} end_time - The end time of the call.
 * @property {CallEndpointResponse} to - Information about the recipient (callee) of the call.
 */

export {};
