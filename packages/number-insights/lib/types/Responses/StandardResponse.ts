import { CallerType } from '../../enums';
import { BasicResponse } from './BasicResponse';
import { CarrierInfoResponse } from './CarrierInforResponse';
import { CallerIdentityResponse } from './CallerIdentityResponse';

/**
 * Type representing a standard response from a phone number lookup operation.
 * This response includes various details such as pricing, carrier information, porting status, and caller identity.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type StandardResponse = BasicResponse & {
  /** The status code of the response. */
  status: number;

  /** The status message of the response. */
  status_message: string;

  /** The unique identifier for the request. */
  request_id: string;

  /** The phone number in international format. */
  international_format_number: string;

  /** The phone number in the format used by the country. */
  national_format_number: string;

  /** The two-character country code for the phone number. */
  country_code: string;

  /** The three-character country code for the phone number. */
  country_code_iso3: string;

  /** The full name of the country that the phone number is registered in. */
  country_name: string;

  /** The numeric prefix for the country that the phone number is registered in. */
  country_prefix: string;

  /** The price charged for the request in EUR. */
  request_price: string;

  /** The refund amount in EUR, reflecting lookup and CNAM pricing. */
  refund_price: string;

  /** Your account balance in EUR after this request. */
  remaining_balance: string;

  /** Information about the current carrier of the phone number. */
  current_carrier: CarrierInfoResponse;

  /** Information about the original carrier of the phone number. */
  original_carrier: CarrierInfoResponse;

  /** Porting status of the phone number. */
  ported: string;

  /** Information about the caller's identity. */
  caller_identity: CallerIdentityResponse;

  /** Full name of the person or business who owns the phone number. */
  caller_name: string;

  /** Last name of the person who owns the phone number. */
  last_name: string;

  /** First name of the person who owns the phone number. */
  first_name: string;

  /** The type of caller, either "business," "consumer," or "unknown." */
  caller_type: CallerType;
};
