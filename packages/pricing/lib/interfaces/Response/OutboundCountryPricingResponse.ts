import { Network } from '../Network';

export interface OutboundCountryPricingResponse {
    countryCode: string;
    countryName: string;
    countryDisplayName: string;
    currency: string;
    defaultPrice: string;
    dialingPrefix: string;
    networks: Network[];
}
