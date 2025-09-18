import { Channels } from '../../enums/';
import { AbstractFileMessage } from '../AbstractFileMessage';
import { WhatsAppFileParams, WhatsAppContext } from '../../types/';

/**
 * Represents a file message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppFile
  extends AbstractFileMessage
  implements WhatsAppFileParams {
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
  public constructor(params: Omit<WhatsAppFileParams, 'channel' | 'messageType'>) {
    super(params);
    this.category = params.category;
    /* istanbul ignore next */
    if (params.context) {
      this.context = params.context;
    }
  }
}
