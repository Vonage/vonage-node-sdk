import { WhatsAppText } from './WhatsAppText';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated
 */
export class Text extends WhatsAppText {
  constructor(text: string, to: string, from: string, clientRef?: string) {
    log('Please update to use the WhatsAppText class instead');
    super({
      text: text,
      to: to,
      from: from,
      clientRef: clientRef,
    });
  }
}
