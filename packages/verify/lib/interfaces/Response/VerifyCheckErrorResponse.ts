import { CheckStatus } from '../../enums/index';

export interface VerifyCheckErrorResponse {
    request_id: string
    status: CheckStatus
    error_text: string
}
