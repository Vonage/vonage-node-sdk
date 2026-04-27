/**
 * Represents filters for searching phone numbers.
 *
 * @typedef {Object} NumbersSearchFilter
 * @property {Country} country - The two-character country code in ISO 3166-1 alpha-2 format. Example: "US" for the United States.
 * @property {LineType} [type] - The type of the phone number.
 * @property {string} [pattern] - A pattern to filter numbers.
 * @property {SearchPattern} [searchPattern] - The search pattern type. Example: 0 for "START_WITH".
 * @property {Array.<Feature>} [features] - The capabilities or features of the number.
 * @property {number} [size] - The maximum number of results to return.
 * @property {number} [index] - The starting index for paginated results.
 */

export {};
