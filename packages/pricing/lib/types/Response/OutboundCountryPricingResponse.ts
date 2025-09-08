import { Network } from '../Network.js';

/**
 * Type representing the response for pricing information of a specific country.
 */
export type OutboundCountryPricingResponse = {
  /**
   * Two-letter country code.
   */
  countryCode: string;

  /**
   * Readable country name.
   */
  countryName: string;

  /**
   * Readable country name.
   */
  countryDisplayName: string;

  /**
   * The currency that your account is being billed in.
   */
  currency: string;

  /**
   * The default price for services in this country.
   */
  defaultPrice: string;

  /**
   * The dialing prefix for this country.
   */
  dialingPrefix: string;

  /**
   * An array of network objects representing different networks in this country.
   */
  networks: Network[];
};
