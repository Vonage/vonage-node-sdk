import { AbstractMessage } from '../AbstractMessage';
import {
  WhatsAppTemplateParams,
  WhatsAppPolicyType,
  WhatsAppTemplateType,
  WhatsAppContext,
} from '../../types/';
import { Channels, MessageTypes } from '../../enums/';

/**
 * Represents a template message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppTemplate
  extends AbstractMessage
  implements WhatsAppTemplateParams {
  /**
   * The channel for this message (always 'whatsapp').
   */
  public channel: Channels.WHATSAPP = Channels.WHATSAPP;

  /**
   * The type of message (always 'template').
   */
  public messageType: MessageTypes.TEMPLATE = MessageTypes.TEMPLATE;

  public whatsapp: WhatsAppPolicyType;

  public template: WhatsAppTemplateType;

  public context?: WhatsAppContext;

  /**
   * Send via MM Lite API only this is valid for marketing template messages
   * only, and for Alpha release only
   */
  public category?: string;

  /**
   * Send a template message to a WhatsApp user.
   *
   * @param {WhatsAppTemplateParams} params - The parameters for creating a WhatsApp template message.
   *
   * @example
   * ```ts
   * import { WhatsAppTemplate, WhatsAppLanguageCode } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppTemplate({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  whatsapp: {
   *    policy: 'deterministic',
   *    locale: WhatsAppLanguageCode.EN,
   *  },
   *  template: {
   *    name: 'your-template-name',
   *    parameters: [
   *      'foo',
   *      'bar',
   *    ],
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: Omit<WhatsAppTemplateParams, 'channel' | 'messageType'>) {
    super(params);
    this.whatsapp = params.whatsapp;
    this.template = params.template;

    /* istanbul ignore next */
    if (params.context) {
      this.context = params.context;
    }

    this.category = params.category;
  }
}
