import { WhatsAppText } from './WhatsAppText.js';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use the WhatsAppText class instead
 *
 * @group WhatsApp
 */
export class Text extends WhatsAppText {
  /**
   * Constructs a new `Text` instance for WhatsApp.
   *
   * @param {string} text - The text message content.
   * @param {string} to - The recipient's WhatsApp number.
   * @param {string} from - The sender's WhatsApp number.
   * @param {string} clientRef - (Optional) A unique client reference for the message.
   */
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
