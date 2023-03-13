import { AbstractMessage } from '../AbsctractMessage';
import { WhatsAppTemplateInterface } from '../../interfaces';
import { WhatsAppTemplateParams } from '../../types';
import { WhatsAppPolicyType } from '../../types';
import { WhatsAppTemplateType } from '../../types';

export class WhatsAppTemplate
  extends AbstractMessage
  implements WhatsAppTemplateInterface
{
  public channel: 'whatsapp';
  public messageType: 'template';
  public whatsapp: WhatsAppPolicyType;
  public template: WhatsAppTemplateType;

  public constructor(params: WhatsAppTemplateParams) {
    super(params);
    this.whatsapp = params.whatsapp;
    this.template = params.template;
    this.channel = 'whatsapp';
    this.messageType = 'template';
  }
}
