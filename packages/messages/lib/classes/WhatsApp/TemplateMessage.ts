import { WhatsAppLanguageCode } from '../../enums';
import { MessageTemplate } from '../../interfaces/WhatsApp/MessageTemplate';
import { WhatsAppTemplate } from './WhatsAppTemplate';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use WhatsAppTemplate instead
 */
export class TemplateMessage extends WhatsAppTemplate {
  constructor(
    template: MessageTemplate,
    to: string,
    from: string,
    locale: string,
    clientRef?: string,
  ) {
    log('Please update to use the WhatsAppTemplate class instead');
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
