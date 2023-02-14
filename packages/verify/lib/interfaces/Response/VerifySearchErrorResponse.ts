import { SearchStatus } from '../../enums/index';

export interface VerifySearchErrorResponse {
    request_id: string
    status: SearchStatus
    error_text: string
}
