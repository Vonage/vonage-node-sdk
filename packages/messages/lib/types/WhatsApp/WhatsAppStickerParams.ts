import { MessageParams } from '../MessageParams';
import { WhatsAppStickerIdType } from './WhatsAppStickerIdType';
import { WhatsAppStickerUrlType } from './WhatsAppStickerUrlType';

export type WhatsAppStickerParams = {
    sticker: WhatsAppStickerIdType | WhatsAppStickerUrlType
} & MessageParams
