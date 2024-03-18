import { AbstractMessage } from '../AbstractMessage';
import {
  WhatsAppStickerParams,
  WhatsAppStickerIdType,
  WhatsAppStickerUrlType,
  WhatsAppContext,
} from '../../types';

/**
 * Represents a sticker message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppSticker
  extends AbstractMessage
  implements WhatsAppStickerParams
{
  public channel: 'whatsapp';
  public messageType: 'sticker';
  public sticker: WhatsAppStickerIdType | WhatsAppStickerUrlType;

  public context?: WhatsAppContext;

  /**
   * Send a sticker message to a WhatsApp user.
   *
   * @param {WhatsAppStickerParams} params - The parameters for creating a WhatsApp sticker message.
   * @example
   * Send a sticker message with a sticker ID:
   * ```ts
   * import { WhatsAppSticker } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppSticker({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  sticker: {
   *    id: '0-0',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   *
   * @example
   * Send a sticker message with a sticker URL:
   * ```ts
   * import { WhatsAppSticker } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppSticker({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  sticker: {
   *    url: 'https://example.com/sticker.png',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: WhatsAppStickerParams) {
    super(params);
    this.sticker = params.sticker;
    this.channel = 'whatsapp';
    this.messageType = 'sticker';
    if (params.context) {
      this.context = params.context;
    }
  }
}
