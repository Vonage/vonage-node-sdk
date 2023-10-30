import { AbstractMessage } from '../AbstractMessage';
import { WhatsAppTemplateParams } from '../../types';
import { WhatsAppPolicyType } from '../../types';
import { WhatsAppTemplateType } from '../../types';

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

  /**
   * Constructs a new `WhatsAppTemplate` instance for WhatsApp.
   *
   * @param {WhatsAppTemplateParams} params - The parameters for creating a WhatsApp template message.
   */
  public constructor(params: WhatsAppTemplateParams) {
    super(params);
    this.whatsapp = params.whatsapp;
    this.template = params.template;
    this.channel = 'whatsapp';
    this.messageType = 'template';
  }
}
