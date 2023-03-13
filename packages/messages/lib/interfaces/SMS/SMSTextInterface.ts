import { MessageTextInterface } from '../MessageTextInterface';

export interface SMSTextInterface extends MessageTextInterface {
    channel: 'sms'
}
