import { AbstractVideoMessage } from '../AbstractVideoMessage';

import { Channels } from '../../enums/';

/**
 * Represents a video message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppVideo extends
AbstractVideoMessage
{
  /**
   * The channel for this message (always 'whatsapp').
   */
  channel = Channels.WHATSAPP;

  context;

  /**
   * Send via MM Lite API only this is valid for marketing template messages
   * only, and for Alpha release only
   *
   * @deprecated
   */
  category;

  /**
   * Sends a video message to a WhatsApp user.
   *
   * @param {WhatsAppVideoParams} params - The parameters for creating a WhatsApp video message.
   *
   * @example
   * ```ts
   * import { WhatsAppVideo } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppVideo({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  video: {
   *    url: 'https://example.com/video.mp4',
   *    caption: 'This is a video message',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params) {
    super(params);
    /* istanbul ignore next */
    if (params.context) {
      this.context = params.context;
    }
    this.category = params.category;
  }
}
