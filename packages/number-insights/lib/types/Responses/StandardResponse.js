/**
 * Type representing a standard response from a phone number lookup operation.
 * This response includes various details such as pricing, carrier information, porting status, and caller identity.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} StandardResponse
 * @property {number} status - The status code of the response.
 * @property {string} status_message - The status message of the response.
 * @property {string} request_id - The unique identifier for the request.
 * @property {string} international_format_number - The phone number in international format.
 * @property {string} national_format_number - The phone number in the format used by the country.
 * @property {string} country_code - The two-character country code for the phone number.
 * @property {string} country_code_iso3 - The three-character country code for the phone number.
 * @property {string} country_name - The full name of the country that the phone number is registered in.
 * @property {string} country_prefix - The numeric prefix for the country that the phone number is registered in.
 * @property {string} request_price - The price charged for the request in EUR.
 * @property {string} refund_price - The refund amount in EUR, reflecting lookup and CNAM pricing.
 * @property {string} remaining_balance - Your account balance in EUR after this request.
 * @property {CarrierInfoResponse} current_carrier - Information about the current carrier of the phone number.
 * @property {CarrierInfoResponse} original_carrier - Information about the original carrier of the phone number.
 * @property {string} ported - Porting status of the phone number.
 * @property {CallerIdentityResponse} caller_identity - Information about the caller's identity.
 * @property {string} caller_name - Full name of the person or business who owns the phone number.
 * @property {string} last_name - Last name of the person who owns the phone number.
 * @property {string} first_name - First name of the person who owns the phone number.
 * @property {CallerType} caller_type - The type of caller, either "business," "consumer," or "unknown."
 */

export {};
