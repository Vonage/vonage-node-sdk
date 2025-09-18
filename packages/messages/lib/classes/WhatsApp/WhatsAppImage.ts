import { AbstractImageMessage } from '../AbstractImageMessage';
import { WhatsAppImageParams, WhatsAppContext } from '../../types/';
import { Channels } from '../../enums/';

/**
 * Represents an image message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppImage
  extends AbstractImageMessage
  implements WhatsAppImageParams {
  /**
   * The channel for this message (always 'whatsapp').
   */
  public channel: Channels.WHATSAPP = Channels.WHATSAPP;

  public context?: WhatsAppContext;

  /**
   * Send via MM Lite API only this is valid for marketing template messages
   * only, and for Alpha release only
   */
  public category?: string;

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
  public constructor(params: Omit<WhatsAppImageParams, 'channel' | 'messageType'>) {
    super(params);
    /* istanbul ignore next */
    if (params.context) {
      this.context = params.context;
    }

    this.category = params.category;
  }
}
