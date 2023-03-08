import { SMSErrorMessageResponse } from './SMSErrorMessageResponse';
import { SMSMessageResponse } from './SMSMessageResponse';

export interface SMSResponse {
    'message-count': number
    messages: SMSMessageResponse[] | SMSErrorMessageResponse[]
}
