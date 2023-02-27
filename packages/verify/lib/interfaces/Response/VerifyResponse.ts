import { CheckStatus } from '../../enums/index';
export interface VerifyResponse {
    request_id: string
    status: CheckStatus
}
