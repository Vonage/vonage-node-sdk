import { AbstractAudioMessage } from '../AbstractAudioMessage';

import { Channels } from '../../enums/';

/**
 * Represents an audio message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppAudio extends
AbstractAudioMessage
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
   * Sends an audio message to a WhatsApp user.
   *
   * @param {WhatsAppAudioParams} params - The parameters for creating a WhatsApp audio message.
   * @example
   * ```ts
   * import { WhatsAppAudio } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppAudio({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  audio: {
   *    url: 'https://example.com/audio.mp3',
   *    caption: 'This is an audio message',
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
