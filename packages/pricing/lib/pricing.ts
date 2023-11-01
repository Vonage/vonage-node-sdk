import { AuthenticationType, Client } from '@vonage/server-client';
import { ServiceType } from './enums';
import {
  OutboundAllCountriesPricingResponse,
  OutboundCountryPricingResponse,
} from './types';

/**
 * A class for interacting with pricing information.
 * Extends the Vonage Client.
 */
export class Pricing extends Client {
  public authType = AuthenticationType.QUERY_KEY_SECRET;

  /**
   * Retrieves pricing information for a specific country and service type.
   * @param {ServiceType} type - The service type.
   * @param {string} country - The country for which pricing information is requested.
   * @return {Promise<OutboundCountryPricingResponse>} - Pricing information for the specified country.
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
