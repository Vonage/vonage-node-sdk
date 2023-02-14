import { CheckStatus } from '../../enums/index';

export interface VerifyCheckResponse {
    request_id: string
    status: CheckStatus
    event_id?: string
    price?: string
    currency?: string
    estimated_price_messages_sent?: string
    error_text?: string
}
