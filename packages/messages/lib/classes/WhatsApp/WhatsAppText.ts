import { AbstractTextMessage } from '../AbstractTextMessage.js';
import { WhatsAppTextParams, WhatsAppContext } from '../../types/index.js';
import { Channels } from '../../enums/index.js';

/**
 * Represents a text message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppText
  extends AbstractTextMessage
  implements WhatsAppTextParams {
  /**
   * The channel for this message (always 'whatsapp').
   */
  public channel: Channels.WHATSAPP = Channels.WHATSAPP;

  public context?: WhatsAppContext;
  /**
   * Send a WhatsApp text message.
   *
   * @param {WhatsAppTextParams} params - The parameters for creating a WhatsApp text message.
   * @example
   * ```ts
   * import { WhatsAppText } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppText({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: Omit<WhatsAppTextParams, 'channel' | 'messageType'>) {
    super(params);
    if (params.context) {
      this.context = params.context;
    }
  }
}
