import { VerifyRequestResponse } from './Response/index';

export interface VerifyCheck extends VerifyRequestResponse {
    requestId: string
    eventId?: string
    errorText?: string
    estimatedPriceMessagesSent?: string
}
