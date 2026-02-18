import { AbstractTextMessage } from '../AbstractTextMessage.js';
import {
  MessageParamsText,
  SMSExtraParams,
  SMSParams
} from '../../types/index.js';
import debug from 'debug';
import { Channels } from '../../enums/index.js';

const log = debug('vonage:messages:sms');

/**
 * Send a text message using the SMS channel.
 *
 * @group SMS
 */
export class SMS extends AbstractTextMessage implements SMSParams {
  /**
   * The channel for this message (always 'sms').
   */
  public channel: Channels.SMS = Channels.SMS;

  public trustedRecipient?: boolean;

  public sms?: SMSExtraParams;

  /**
   * The duration in seconds the delivery of an SMS will be attempted. By
   * default Vonage attempts delivery for 72 hours, however the maximum
   * effective value depends on the operator and is typically 24 - 48 hours. We
   * recommend this value should be kept at its default or at least 30 minutes.
   */
  public ttl?: number;

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
      log('Please update the call to pass in an object instead of parameters');
      params = {
        text: params as string,
        to: to as string,
        from: from as string,
        clientRef: clientRef,
      } as SMSParams;
    }

    super(params as MessageParamsText);
    if (typeof params === 'string') {
      return;
    }

    this.ttl = params.ttl;
    this.sms = params.sms
      ? {
        encodingType: params.sms?.encodingType,
        contentId: params.sms?.contentId,
        entityId: params.sms?.entityId,
      }
      : undefined;



    if (params.trustedRecipient) {
      this.trustedRecipient = !!params.trustedRecipient;
    }
  }
}
