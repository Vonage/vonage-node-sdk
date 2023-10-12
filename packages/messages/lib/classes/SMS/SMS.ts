import { AbstractTextMessage } from '../AbstractTextMessage';
import { MessageParamsText, SMSParams  } from '../../types';
import debug from 'debug';

const log = debug('vonage:messages:sms');

/**
 * Send a text message using the SMS channel.
 *
 * @group SMS
 */
export class SMS extends AbstractTextMessage implements SMSParams {
  public channel: 'sms';

  /**
   * Send an SMS message
   *
   * @param {MessageParamsText | string} params - The message parameters or text message.
   * @param {string} to - The recipient's phone number.
   * @param {string} from - The sender's phone number.
   * @param {string} clientRef - The client reference for the message.
   *
   * @example
   * ```ts
   * import { SMS } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new SMS({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
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
