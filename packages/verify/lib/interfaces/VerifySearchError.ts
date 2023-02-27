import { VerifySearchErrorResponse } from './Response/index';

export interface VerifySearchError extends VerifySearchErrorResponse {
    requestId: string
    errorText: string
}
