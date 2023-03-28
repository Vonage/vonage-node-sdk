import { WhatsAppText } from './WhatsAppText';

/**
 * @deprecated
 */
export class Text extends WhatsAppText {
  constructor(text: string, to: string, from: string, clientRef?: string) {
    super({
      text: text,
      to: to,
      from: from,
      clientRef: clientRef,
    });
  }
}
