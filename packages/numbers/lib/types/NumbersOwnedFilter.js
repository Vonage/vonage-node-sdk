/**
 * Represents filters for searching owned numbers.
 *
 * @typedef {Object} NumbersOwnedFilter
 * @property {Country} [country] - The two-character country code in ISO 3166-1 alpha-2 format. Example: "US" for the United States.
 * @property {string} [applicationId] - An Application ID. Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
 * @property {boolean} [hasApplication] - Indicates whether numbers have an associated application.
 * @property {string} [pattern] - A pattern to filter numbers.
 * @property {SearchPattern} [searchPattern] - The search pattern type. Example: SearchPattern.START_WITH.
 * @property {number} [size] - The maximum number of results to return.
 * @property {number} [index] - The starting index for paginated results.
 */

export {};
