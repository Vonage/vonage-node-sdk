/**
 * Type representing a basic response from a phone number lookup operation.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} BasicResponse
 * @property {number} status - The status code of the response.
 * @property {string} status_message - The status message of the response.
 * @property {string} request_id - The unique identifier for the request.
 * @property {string} international_format_number - The phone number in international format.
 * @property {string} national_format_number - The phone number in the format used by the country.
 * @property {string} country_code - The two-character country code for the phone number.
 * @property {string} country_code_iso3 - The three-character country code for the phone number.
 * @property {string} country_name - The full name of the country that the phone number is registered in.
 * @property {string} country_prefix - The numeric prefix for the country that the phone number is registered in.
 */

export {};
