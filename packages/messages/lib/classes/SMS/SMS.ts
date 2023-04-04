import { AbstractTextMessage } from '../AbstractTextMessage';
import { SMSTextInterface } from '../../interfaces';
import { MessageParamsText } from '../../types';
import debug from 'debug';

const log = debug('vonage:messages:sms');

export class SMS extends AbstractTextMessage implements SMSTextInterface {
  public channel: 'sms';

  constructor(
    params: MessageParamsText | string,
    to?: string,
    from?: string,
    clientRef?: string,
  ) {
    if (to) {
      log('Please update the call to use MessageParamsText instead');
      params = {
        text: params as string,
        to: to,
        from: from,
        clientRef: clientRef,
      };
    }
    super(params as MessageParamsText);
    this.channel = 'sms';
  }
}
