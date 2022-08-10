import { Auth } from "@vonage/auth";
import { request, ResponseTypes } from "@vonage/vetch";
import { ServiceType } from "./enums/ServiceType";
import { PricingResponse } from "./interfaces/PricingResponse";
import { OutboundAllCountriesPricingResponse } from "./interfaces/Response/OutboundAllCountriesPricingResponse";
import { OutboundCountryPricingResponse } from "./interfaces/Response/OutboundCountryPricingResponse";
import { PricingClassParameters } from "./types/PricingClassParameters";

export const BASE_URL = 'https://rest.nexmo.com/account/'.replace(/\/+$/, '');

const runRequest = async <T>(options: any, config: any): Promise<PricingResponse<T>> => {
    options.params = Object.assign(options.params, { api_key: config.auth.apiKey, api_secret: config.auth.apiSecret });
    const result = await request<T>(options);
    return result;
};

export class Pricing {
  protected config: PricingClassParameters;

  constructor(opts?: PricingClassParameters) {
    if (opts) {
      opts.auth = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret });
      opts.baseUrl = opts.baseUrl || BASE_URL;
      opts.responseType = opts.responseType || ResponseTypes.json;
      this.config = opts;
    }
  }

  public async listCountryPricing(type: ServiceType, country: string) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/get-pricing/outbound/${type}`,
      params: { country },
      method: 'GET'
    }

    const resp = await runRequest<OutboundCountryPricingResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async listAllCountriesPricing(type: ServiceType) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/get-full-pricing/outbound/${type}`,
      params: { }, // Empty to prep for authentication
      method: 'GET'
    }

    const resp = await runRequest<OutboundAllCountriesPricingResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async listPrefixPricing(type: ServiceType, prefix: string) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/get-prefix-pricing/outbound/${type}`,
      params: { prefix },
      method: 'GET'
    }

    const resp = await runRequest<OutboundAllCountriesPricingResponse>(localVetchOptions, this.config);
    return resp.data;
  }
}