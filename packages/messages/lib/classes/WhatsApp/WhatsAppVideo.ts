import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { WhatsAppVideoParams, WhatsAppContext } from '../../types';

/**
 * Represents a video message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppVideo
  extends AbstractVideoMessage
  implements WhatsAppVideoParams
{
  public channel: 'whatsapp';

  public context?: WhatsAppContext;
  /**
   * Sends a video message to a WhatsApp user.
   *
   * @param {WhatsAppVideoParams} params - The parameters for creating a WhatsApp video message.
   *
   * @example
   * ```ts
   * import { WhatsAppVideo } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppVideo({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  video: {
   *    url: 'https://example.com/video.mp4',
   *    caption: 'This is a video message',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: WhatsAppVideoParams) {
    super(params);
    this.channel = 'whatsapp';
    /* istanbul ignore next */
    if (params.context) {
      this.context = params.context;
    }
  }
}
