import { CheckInformation } from './CheckInformation';
import { EventInformation } from './EventInformation';

export interface VerifySearchResponse {
    request_id: string;
    account_id: string;
    status: string;
    number: string;
    price: string;
    currency: string;
    sender_id: string;
    date_submitted: string;
    date_finalized: string;
    first_event_date?: string;
    last_event_date?: string;
    checks?: CheckInformation[];
    events?: EventInformation[];
    estimated_price_messages_sent;
}
