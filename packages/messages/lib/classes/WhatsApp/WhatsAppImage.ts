import { AbstractImageMessage } from '../AbstractImageMessage';
import { WhatsAppImageParams, WhatsAppContext } from '../../types';

/**
 * Represents an image message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppImage
  extends AbstractImageMessage
  implements WhatsAppImageParams
{
  public channel: 'whatsapp';

  public context?: WhatsAppContext;
  /**
   * Sends an image message to a WhatsApp user.
   *
   * @param {WhatsAppImageParams} params - The parameters for creating a WhatsApp image message.
   * @example
   * ```ts
   * import { WhatsAppImage } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppImage({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  image: {
   *    url: 'https://example.com/image.jpg',
   *    caption: 'This is an image message',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: WhatsAppImageParams) {
    super(params);
    this.channel = 'whatsapp';
    if (params.context) {
      this.context = params.context;
    }
  }
}
