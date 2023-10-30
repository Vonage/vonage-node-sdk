import { AbstractMessage } from '../AbstractMessage';
import { WhatsAppStickerParams } from '../../types';
import { WhatsAppStickerIdType } from '../../types';
import { WhatsAppStickerUrlType } from '../../types';

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

  /**
   * Constructs a new `WhatsAppSticker` instance for WhatsApp.
   *
   * @param {WhatsAppStickerParams} params - The parameters for creating a WhatsApp sticker message.
   */
  public constructor(params: WhatsAppStickerParams) {
    super(params);
    this.sticker = params.sticker;
    this.channel = 'whatsapp';
    this.messageType = 'sticker';
  }
}
