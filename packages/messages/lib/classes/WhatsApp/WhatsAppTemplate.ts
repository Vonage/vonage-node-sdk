import { AbstractMessage } from '../AbstractMessage';
import {
  WhatsAppTemplateParams,
  WhatsAppPolicyType,
  WhatsAppTemplateType,
  WhatsAppContext,
} from '../../types';

/**
 * Represents a template message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppTemplate
  extends AbstractMessage
  implements WhatsAppTemplateParams
{
  public channel: 'whatsapp';
  public messageType: 'template';
  public whatsapp: WhatsAppPolicyType;
  public template: WhatsAppTemplateType;

  public context?: WhatsAppContext;

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
  public constructor(params: WhatsAppTemplateParams) {
    super(params);
    this.whatsapp = params.whatsapp;
    this.template = params.template;
    this.channel = 'whatsapp';
    this.messageType = 'template';
    if (params.context) {
      this.context = params.context;
    }
  }
}
