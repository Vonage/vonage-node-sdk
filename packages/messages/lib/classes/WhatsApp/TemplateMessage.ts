import { WhatsAppLanguageCode } from '../../enums';
import { MessageTemplate } from '../../interfaces/WhatsApp/MessageTemplate';
import { WhatsAppTemplate } from './WhatsAppTemplate';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use the WhatsAppTemplate class instead
 *
 * @group WhatsApp
 */
export class TemplateMessage extends WhatsAppTemplate {
  /**
   * Constructs a new `TemplateMessage` instance for WhatsApp.
   *
   * @param {MessageTemplate} template - The template object for the message.
   * @param {string} to - The recipient's WhatsApp number.
   * @param {string} from - The sender's WhatsApp number.
   * @param {string} locale - The locale or language code for the message.
   * @param {string} clientRef - (Optional) A unique client reference for the message.
   */
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
