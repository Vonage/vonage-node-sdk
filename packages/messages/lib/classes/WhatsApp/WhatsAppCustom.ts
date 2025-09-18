import { AbstractMessage } from '../AbstractMessage.js';
import {
  WhatsAppCustomType,
  WhatsAppCustomParams,
  WhatsAppContext,
} from '../../types/index.js';
import { Channels, MessageTypes } from '../../enums/index.js';

/**
 * Represents a custom message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppCustom
  extends AbstractMessage
  implements WhatsAppCustomParams {
  /**
   * The channel for this message (always 'whatsapp').
   */
  public channel: Channels.WHATSAPP = Channels.WHATSAPP;

  /**
   * The type of message (always 'custom').
   */
  public messageType: MessageTypes = MessageTypes.CUSTOM;

  public custom: WhatsAppCustomType;

  public context?: WhatsAppContext;

  /**
   * Send via MM Lite API only this is valid for marketing template messages
   * only, and for Alpha release only
   */
  public category?: string;

  /**
   * Sends a custom message to a WhatsApp user.
   *
   * @param {WhatsAppCustomParams} params - The parameters for creating a WhatsApp custom message.
   * @example
   * ```ts
   * import { WhatsAppCustom } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppCustom({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  custom: {
   *    type: 'template',
   *    template: {
   *      namespace: 'your-namespace',
   *      name: 'your-template-name',
   *    },
   *  }
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: Omit<WhatsAppCustomParams, 'channel' | 'messageType'>) {
    super(params);
    this.custom = params.custom;
    /* istanbul ignore next */
    if (params.context) {
      this.context = params.context;
    }

    this.category = params.category;
  }
}
