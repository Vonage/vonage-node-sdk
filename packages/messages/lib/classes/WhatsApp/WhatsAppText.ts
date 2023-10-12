import { AbstractTextMessage } from '../AbstractTextMessage';
import { WhatsAppTextParams } from '../../types';

/**
 * Represents a text message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppText
  extends AbstractTextMessage
  implements WhatsAppTextParams
{
  public channel: 'whatsapp';

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
  public constructor(params: WhatsAppTextParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
