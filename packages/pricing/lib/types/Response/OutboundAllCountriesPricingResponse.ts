import { OutboundCountryPricingResponse } from './OutboundCountryPricingResponse';

/**
 * Type representing the response for pricing information of all countries.
 */
export type OutboundAllCountriesPricingResponse = {
  /**
   * The number of countries in the response.
   */
  count: number;

  /**
   * An array of objects containing pricing information for individual countries.
   */
  countries: OutboundCountryPricingResponse[];
};
