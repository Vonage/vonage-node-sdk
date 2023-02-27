import { VerifyRequestResponse } from './Response/VerifyRequestResponse';

export interface VerifyRequest extends VerifyRequestResponse {
    requestId: string
}
