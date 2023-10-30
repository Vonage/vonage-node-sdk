import { MessageParams } from '../../MessageParams';
import { WhatsAppStickerIdType } from './WhatsAppStickerIdType';
import { WhatsAppStickerUrlType } from './WhatsAppStickerUrlType';

/**
 * Represents WhatsApp sticker parameters for sending stickers in a message.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppStickerParams = {
  /**
   * The sticker to be sent, which can be either a sticker ID or a sticker URL.
   */
  sticker: WhatsAppStickerIdType | WhatsAppStickerUrlType;
} & MessageParams;
