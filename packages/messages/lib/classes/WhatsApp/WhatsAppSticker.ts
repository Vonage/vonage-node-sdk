import { AbstractMessage } from '../AbsctractMessage';
import { WhatsAppStickerInterface } from '../../interfaces';
import { WhatsAppStickerParams } from '../../types';
import { WhatsAppStickerIdType } from '../../types';
import { WhatsAppStickerUrlType } from '../../types';

export class WhatsAppSticker
  extends AbstractMessage
  implements WhatsAppStickerInterface
{
  public channel: 'whatsapp';
  public messageType: 'sticker';
  public sticker: WhatsAppStickerIdType | WhatsAppStickerUrlType;

  public constructor(params: WhatsAppStickerParams) {
    super(params);
    this.sticker = params.sticker;
    this.channel = 'whatsapp';
    this.messageType = 'sticker';
  }
}
