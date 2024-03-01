import { AbstractTextMessage } from '../AbstractTextMessage';
import { MessageParamsText, SMSExtraParams, SMSParams } from '../../types';
import debug from 'debug';

const log = debug('vonage:messages:sms');

/**
 * Send a text message using the SMS channel.
 *
 * @group SMS
 */
export class SMS extends AbstractTextMessage implements SMSParams {
  public channel: 'sms';

  public sms?: SMSExtraParams;

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
   *
   * @example
   * Send SMS with entity ID and content ID
   * ```ts
   * import { SMS } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new SMS({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
   *  clientRef: 'my-personal-reference',
   *  sms: {
   *    entityId: 'MyEntityID',
   *    contentId: 'MyContentID'
   *  }
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(
    params: SMSParams | string,
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
    if (typeof params === 'string') {
      return;
    }

    this.sms = params.sms
      ? {
        encodingType: params.sms?.encodingType,
        contentId: params.sms?.contentId,
        entityId: params.sms?.entityId,
      }
      : undefined;
  }
}
