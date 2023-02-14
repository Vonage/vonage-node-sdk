import { VerifyCheckResponse } from './Response/index';

export interface VerifySearchCheck extends VerifyCheckResponse {
    dateReceived: string
    ipAddress: string
}
