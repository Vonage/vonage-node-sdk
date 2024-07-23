import { LineType, Feature } from '../enums';
import { Country } from './Country';

/**
 * Represents an available phone number with its details.
 */
export type NumbersAvailableNumber = {
  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   * Example: "US" for the United States.
   */
  country?: Country;

  /**
   * An available inbound virtual phone number.
   * Example: "447700900000".
   */
  msisdn?: string;

  /**
   * The type of phone number.
   * Example: "mobile-lvn" or "landline".
   */
  type?: LineType;

  /**
   * The cost associated with the phone number.
   * Example: "$10.00".
   */
  cost?: string;

  /**
   * The capabilities/features of the phone number, such as SMS, VOICE, or MMS.
   * Example: ["SMS", "VOICE"].
   */
  features?: Feature[];
};
