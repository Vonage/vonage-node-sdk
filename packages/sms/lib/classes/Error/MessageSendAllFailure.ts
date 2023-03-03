import { SMSMessages } from '../../interfaces';
import { SMSFailure } from './SMSFailure';

export class MessageSendAllFailure extends SMSFailure {
  constructor(response: SMSMessages) {
    super('All SMS messages failed to send', response);
  }
}
