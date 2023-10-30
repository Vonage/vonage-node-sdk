import { AbstractTextMessage } from '../AbstractTextMessage';
import { MessageParamsText } from '../../types';
import debug from 'debug';
import { SMSParams } from "../../types/Channels/SMSParams";

const log = debug('vonage:messages:sms');

/**
 * Represents an SMS text message.
 *
 * @group SMS
 */
export class SMS extends AbstractTextMessage implements SMSParams {
  public channel: 'sms';

  /**
   * Constructs a new `SMS` instance for the SMS channel.
   *
   * @param {MessageParamsText | string} params - The message parameters or text message.
   * @param {string} to - The recipient's phone number.
   * @param {string} from - The sender's phone number.
   * @param {string} clientRef - The client reference for the message.
   */
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
        to: to as string,
        from: from as string,
        clientRef: clientRef,
      };
    }

    super(params as MessageParamsText);
    this.channel = 'sms';
  }
}
