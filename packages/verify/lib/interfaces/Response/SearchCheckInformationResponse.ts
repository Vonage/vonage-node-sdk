import { SearchCheckStatus } from '../../enums/index';

export interface SearchCheckInformationResponse {
    date_received: string
    code: string
    status: SearchCheckStatus
    ip_address: string
}
