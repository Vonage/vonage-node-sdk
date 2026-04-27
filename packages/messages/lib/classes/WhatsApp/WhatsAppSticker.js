import { AbstractMessage } from '../AbstractMessage';

import { Channels, MessageTypes } from '../../enums/';

/**
 * Represents a sticker message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppSticker extends
AbstractMessage
{
  /**
   * The channel for this message (always 'whatsapp').
   */
  channel = Channels.WHATSAPP;

  /**
   * The type of message (always 'sticker').
   */
  messageType = MessageTypes.STICKER;

  sticker;

  context;

  /**
   * Send via MM Lite API only this is valid for marketing template messages
   * only, and for Alpha release only
   *
   * @deprecated
   */
  category;

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
  constructor(params) {
    super(params);
    this.sticker = params.sticker;
    /* istanbul ignore next */
    if (params.context) {
      this.context = params.context;
    }

    this.category = params.category;
  }
}
