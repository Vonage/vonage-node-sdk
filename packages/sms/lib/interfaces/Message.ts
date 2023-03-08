import { SMSMessageResponse } from './Response/index';

export interface Message extends SMSMessageResponse {
    messageId?: string
    remainingBalance?: string
    messagePrice?: string
    clientRef?: string
    accountRef?: string
}
