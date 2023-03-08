import { SMSStatus } from '../../enums/SMSErrors';

export interface SMSErrorMessageResponse {
    status: SMSStatus
    'error-text': string
}
