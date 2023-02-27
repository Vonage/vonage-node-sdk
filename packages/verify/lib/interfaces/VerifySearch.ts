import { VerifySearchResponse } from './Response/index';
import { VerifySearchCheck } from './VerifySearchCheck';

export interface VerifySearch extends Omit<VerifySearchResponse, 'checks'> {
    requestId: string
    accountId: string
    senderId: string
    dateSubmitted: string
    dateFinalized: string
    firstEventDate?: string
    lastEventDate?: string
    checks: VerifySearchCheck[]
    estimatedPriceMessagesSent: string
}
