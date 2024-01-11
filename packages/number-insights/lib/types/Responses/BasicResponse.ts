/**
 * Type representing a basic response from a phone number lookup operation.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type BasicResponse = {
  /**
   * The status code of the response.
   */
  status: number;

  /**
   * The status message of the response.
   */
  status_message: string;

  /**
   * The unique identifier for the request.
   */
  request_id: string;

  /**
   * The phone number in international format.
   */
  international_format_number: string;

  /**
   * The phone number in the format used by the country.
   */
  national_format_number: string;

  /**
   * The two-character country code for the phone number.
   */
  country_code: string;

  /**
   * The three-character country code for the phone number.
   */
  country_code_iso3: string;

  /**
   * The full name of the country that the phone number is registered in.
   */
  country_name: string;

  /**
   * The numeric prefix for the country that the phone number is registered in.
   */
  country_prefix: string;
};
