import { OutboundCountryPricingResponse } from './OutboundCountryPricingResponse'

export interface OutboundAllCountriesPricingResponse {
    count: number
    countries: OutboundCountryPricingResponse[]
}
