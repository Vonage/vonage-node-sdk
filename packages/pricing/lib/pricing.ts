import { AuthenticationType, Client } from '@vonage/server-client';
import { ServiceType } from './enums/ServiceType';
import {
    OutboundAllCountriesPricingResponse,
} from './interfaces/Response/OutboundAllCountriesPricingResponse';
import {
    OutboundCountryPricingResponse,
} from './interfaces/Response/OutboundCountryPricingResponse';

export class Pricing extends Client {
    protected authType = AuthenticationType.QUERY_KEY_SECRET;

    public async listCountryPricing(
        type: ServiceType,
        country: string,
    ): Promise<OutboundCountryPricingResponse> {
        const resp = await this.sendGetRequest<OutboundCountryPricingResponse>(
            `${this.config.restHost}/account/get-pricing/outbound/${type}`,
            { country },
        );
        return resp.data;
    }

    public async listAllCountriesPricing(
        type: ServiceType,
    ): Promise<OutboundAllCountriesPricingResponse> {
        // eslint-disable-next-line max-len
        const resp = await this.sendGetRequest<OutboundAllCountriesPricingResponse>(
            `${this.config.restHost}/account/get-full-pricing/outbound/${type}`,
        );
        return resp.data;
    }

    public async listPrefixPricing(
        type: ServiceType,
        prefix: string,
    ): Promise<OutboundAllCountriesPricingResponse> {
        const resp
            = await this.sendGetRequest<OutboundAllCountriesPricingResponse>(
                `${this.config.restHost}/account/get-prefix-pricing/outbound/${type}`,
                { prefix },
            );
        return resp.data;
    }
}
