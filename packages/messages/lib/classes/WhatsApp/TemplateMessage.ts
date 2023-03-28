import { WhatsAppLanguageCode } from '../../enums';
import { MessageTemplate } from '../../interfaces/WhatsApp/MessageTemplate';
import { WhatsAppTemplate } from './WhatsAppTemplate';

export class TemplateMessage extends WhatsAppTemplate {
  constructor(
    template: MessageTemplate,
    to: string,
    from: string,
    locale: string,
    clientRef?: string,
  ) {
    super({
      to: to,
      from: from,
      clientRef: clientRef,
      template: template,
      whatsapp: {
        policy: 'deterministic',
        locale: locale as WhatsAppLanguageCode,
      },
    });
  }
}
