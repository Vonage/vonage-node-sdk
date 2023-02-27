import { SearchCheckInformationResponse } from './SearchCheckInformationResponse';
import { SearchEventInformationResponse } from './SearchEventInformationResponse';
import { SearchStatus } from './../../enums/index';

export interface VerifySearchResponse {
    request_id: string
    account_id: string
    status: SearchStatus
    number: string
    price: string
    currency: string
    sender_id: string
    date_submitted: string
    date_finalized: string
    first_event_date: string
    last_event_date: string
    checks: SearchCheckInformationResponse[]
    events: SearchEventInformationResponse[]
    estimated_price_messages_sent: string
}
