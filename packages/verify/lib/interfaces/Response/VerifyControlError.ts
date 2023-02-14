import { CheckStatus } from '../../enums/index';

export interface VerifyControlErrorResponse {
    status: CheckStatus
    error_text: string
}
