import { AbstractFileMessage } from '../AbstractFileMessage';
import { WhatsAppFileParams } from '../../types';

/**
 * Represents a file message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppFile
  extends AbstractFileMessage
  implements WhatsAppFileParams
{
  public channel: 'whatsapp';

  /**
   * Send a WhatsApp file message.
   *
   * @param {WhatsAppFileParams} params - The parameters for creating a WhatsApp file message.
   * @example
   * ```ts
   * import { WhatsAppFile } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppFile({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  file: {
   *    url: 'https://example.com/image.jpg',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: WhatsAppFileParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
