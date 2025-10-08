import { StatusType } from './status.js';

/**
 * Represents the result of the current and original carrier insights.
 */
export type Format = {

  /**
   * The status of the insight call.
   */
  status: StatusType;

  /**
   * The country that phone number is associated with. This is in ISO 3166-1 alpha-2 format.
   */
  countryCode?: string;

  /**
   * The full name of the country where the phone number is registered.
   */
  countryName?: string;

  /**
   * The numeric prefix for the country where the phone number is registered.
   */
  countryPrefix?: string;

  /**
   * The location where the number was originally assigned, based on its prefix
   */
  offlineLocation?: string;

  /**
   * List of time zones corresponding to the offline_location field
   */
  timeZones?: string[];

  /**
   * The phone number from your request, formatted in international E.164 format.
   */
  numberInternational?: string;

  /**
   * The phone_number from your request, formatted according to the local
   * convention of the country it belongs to.
   */
  numberNational?: string;

  /**
   * Phone number format validation involves verifying the length and prefix details at various levels
   */
  isFormatValid?: boolean;

};
