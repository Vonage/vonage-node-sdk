import { SMSMessages } from '../../interfaces';
import { SMSFailure } from './SMSFailure';

export class MessageSendPartialFailure extends SMSFailure {
  constructor(response: SMSMessages) {
    super('Some SMS messages failed to send', response);
  }
}
