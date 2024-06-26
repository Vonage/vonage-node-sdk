import { Country } from './Country';

/**
 * Represents parameters for configuring a phone number.
 */
export type NumbersParams = {
  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   * Example: "US" for the United States.
   */
  country: Country;

  /**
   * The phone number.
   * Example: "447700900000".
   */
  msisdn: string;

  /**
   * An optional target API key.
   */
  targetApiKey?: string;
};
