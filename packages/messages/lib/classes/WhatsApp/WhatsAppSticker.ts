import { AbstractMessage } from '../AbstractMessage';
import {
  WhatsAppStickerParams,
  WhatsAppStickerIdType,
  WhatsAppStickerUrlType,
  WhatsAppContext,
} from '../../types/';
import { Channels, MessageTypes } from '../../enums/';

/**
 * Represents a sticker message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppSticker
  extends AbstractMessage
  implements WhatsAppStickerParams {
  /**
   * The channel for this message (always 'whatsapp').
   */
  public channel: Channels.WHATSAPP = Channels.WHATSAPP;

  /**
   * The type of message (always 'sticker').
   */
  public messageType: MessageTypes.STICKER = MessageTypes.STICKER;

  public sticker: WhatsAppStickerIdType | WhatsAppStickerUrlType;

  public context?: WhatsAppContext;

  /**
   * Send via MM Lite API only this is valid for marketing template messages
   * only, and for Alpha release only
   */
  public category?: string;

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
  public constructor(params: Omit<WhatsAppStickerParams, 'channel' | 'messageType'>) {
    super(params);
    this.sticker = params.sticker;
    /* istanbul ignore next */
    if (params.context) {
      this.context = params.context;
    }

    this.category = params.category;
  }
}
