import { SMSStatus } from '../../enums/SMSErrors';

export interface SMSMessageResponse {
    to: string
    'message-id': string
    status: SMSStatus
    'remaining-balance': string
    'message-price': string
    network: string
    'client-ref'?: string
    'account-ref'?: string
}
