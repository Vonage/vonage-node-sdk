/**
 * Represents filters for querying owned numbers.
 *
 * @typedef {Object} NumbersQueryOwnedFilter
 * @property {Country} [country] - The two-character country code in ISO 3166-1 alpha-2 format. Example: "US" for the United States.
 * @property {string} [application_id] - An Application ID. Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
 * @property {boolean} [has_application] - Indicates whether numbers have an associated application.
 * @property {string} [pattern] - A pattern to filter numbers.
 * @property {number} [search_pattern] - The search pattern type. Example: 0 for "START_WITH".
 * @property {number} [size] - The maximum number of results to return.
 * @property {number} [index] - The starting index for paginated results.
 */

export {};
