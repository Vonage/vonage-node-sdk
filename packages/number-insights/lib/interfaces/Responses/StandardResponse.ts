import { CallerType } from '../../enums/CallerType'
import { NetworkType } from '../../enums/NetworkType'
import { BasicResponse } from './BasicResponse'

export interface StandardResponse extends BasicResponse {
    request_price: string
    refund_price: string
    remaining_balance: string
    current_carrier: {
        network_code: string
        name: string
        country: string
        network_type: NetworkType
    }
    original_carrier: {
        network_code: string
        name: string
        country: string
        network_type: NetworkType
    }
    ported: string
    caller_identity: {
        caller_type: CallerType
        caller_name: string
        first_name: string
        last_name: string
    }
    caller_name: string
    last_name: string
    first_name: string
    caller_type: CallerType
}
