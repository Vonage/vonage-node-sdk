/**
 * Represents the request payload for retrieving call details with various filtering options.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} GetCallDetailsRequest
 * @property {string} [date_start] - The start date for filtering call records.
 * @property {string} [date_end] - The end date for filtering call records.
 * @property {number} [page_size] - The maximum number of records to return per page.
 * @property {number} [record_index] - The record index for pagination.
 * @property {string} [conversation_uuid] - The UUID of the conversation to filter call records by.
 */

export {};
