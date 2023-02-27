import { VerifyCheckErrorResponse } from './Response/index';

export interface VerifyCheckError extends VerifyCheckErrorResponse {
    requestId: string
    errorId: string
}
