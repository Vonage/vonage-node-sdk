import { AbstractTextMessage } from '../AbstractTextMessage';
import { SMSTextInterface } from '../../interfaces';
import { MessageParamsText } from '../../types';

export class SMS extends AbstractTextMessage implements SMSTextInterface {
  public channel: 'sms';

  constructor(params: MessageParamsText) {
    super(params);
    this.channel = 'sms';
  }
}
