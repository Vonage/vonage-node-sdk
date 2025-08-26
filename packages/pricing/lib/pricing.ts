import { AuthenticationType, Client } from '@vonage/server-client';
import { ServiceType } from './enums/index.js';
import {
  OutboundAllCountriesPricingResponse,
  OutboundCountryPricingResponse,
} from './types/index.js';

/**
 * The Pricing API allows you to retrieve pricing information for all countries
 * and a specific service type, for a specific country and service type, or for
 * a specific prefix and service type.
 *
 * @example
 * Create a standalone Pricing client
 *
 * ```ts
 * import { Pricing } from '@vonage/pricing';
 *
 * const pricingClient = new Pricing({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 * @example
 * Create an Pricing client from the Vonage client
 *
 * ```ts
 * import { Vonage } from '@vonage/server-client';
 *
 * const vonage = new Vonage({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET
 * });
 *
 * const pricingClient = vonage.pricing;
 * ```
 */
export class Pricing extends Client {
  /**
   * @see {@link Client.authType}
   */
  protected authType = AuthenticationType.BASIC;

  /**
   * Retrieves pricing information for a specific country and service type.
   *
   * @param {ServiceType} type - The service type.
   * @param {string} country - The country for which pricing information is requested.
   * @return {Promise<OutboundCountryPricingResponse>} - Pricing information for the specified country.
   * @example
   *
   * ```ts
   * import { ServiceType } from '@vonage/pricing';
   *
   * const pricing = await pricingClient.listCountryPricing(ServiceType.SMS, 'GB');
   * console.log(`The current price for Great Britian is ${pricing.defaultPrice}`);
   * ```
   */
  async listCountryPricing(
    type: ServiceType,
    country: string,
  ): Promise<OutboundCountryPricingResponse> {
    const resp = await this.sendGetRequest<OutboundCountryPricingResponse>(
      `${this.config.restHost}/account/get-pricing/outbound/${type}`,
      { country },
    );
    return resp.data;
  }

  /**
   * Retrieves pricing information for all countries and a specific service type.
   * @param {ServiceType} type - The service type.
   * @return {Promise<OutboundAllCountriesPricingResponse>} - Pricing information for all countries.
   * @example
   * ```ts
   * import { ServiceType } from '@vonage/pricing';
   *
   * const pricing = await pricingClient.listAllCountriesPricing(ServiceType.SMS);
   * for (const country in pricing.countries) {
   *  console.log(`The current price for ${country.countryName} is ${country.defaultPrice}`);
   * }
   * ```
   */
  async listAllCountriesPricing(
    type: ServiceType,
  ): Promise<OutboundAllCountriesPricingResponse> {
    const resp = await this.sendGetRequest<OutboundAllCountriesPricingResponse>(
      `${this.config.restHost}/account/get-full-pricing/outbound/${type}`,
    );
    return resp.data;
  }

  /**
   * Retrieves pricing information for a specific prefix and service type.
   * @param {ServiceType} type - The service type.
   * @param {string} prefix - The prefix for which pricing information is requested.
   * @return {Promise<OutboundAllCountriesPricingResponse>} - Pricing information for the specified prefix.
   *
   * @example
   * ```ts
   * import { ServiceType } from '@vonage/pricing';
   *
   * const pricing = await pricingClient.listPrefixPricing(ServiceType.SMS, '44');
   * console.log(`The current price for Great Britian is ${pricing.defaultPrice}`);
   * ```
   */
  async listPrefixPricing(
    type: ServiceType,
    prefix: string,
  ): Promise<OutboundAllCountriesPricingResponse> {
    const resp = await this.sendGetRequest<OutboundAllCountriesPricingResponse>(
      `${this.config.restHost}/account/get-prefix-pricing/outbound/${type}`,
      { prefix },
    );
    return resp.data;
  }
}
