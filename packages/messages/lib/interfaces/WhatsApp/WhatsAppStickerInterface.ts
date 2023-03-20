import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageInterface } from '../MessageInterface';
import { WhatsAppStickerUrlType } from '../../types';
import { WhatsAppStickerIdType } from '../../types';

export interface WhatsAppStickerInterface
    extends WhatsAppChannelInterface,
        MessageInterface {
    messageType: 'sticker'
    sticker: WhatsAppStickerUrlType | WhatsAppStickerIdType
}
