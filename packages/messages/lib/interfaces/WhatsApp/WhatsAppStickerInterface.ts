import { WhatsAppChannelInterface } from './WhatsAppChannelInterface.js';
import { MessageInterface } from '../MessageInterface.js';
import {
  WhatsAppStickerIdType,
  WhatsAppStickerUrlType
} from '../../types/index.js';

/**
 * Represents an interface for WhatsApp sticker messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface WhatsAppStickerInterface
  extends WhatsAppChannelInterface,
  MessageInterface {
  /**
   * Specifies the type of message, which is "sticker" for sticker messages.
   */
  messageType: 'sticker';

  /**
   * The sticker to be sent. It can be either a sticker URL or a sticker ID.
   */
  sticker: WhatsAppStickerUrlType | WhatsAppStickerIdType;
}

