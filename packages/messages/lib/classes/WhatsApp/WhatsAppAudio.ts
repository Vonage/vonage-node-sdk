import { AbstractAudioMessage } from '../AbstractAudioMessage';
import { WhatsAppAudioParams, WhatsAppContext } from '../../types';

/**
 * Represents an audio message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppAudio
  extends AbstractAudioMessage
  implements WhatsAppAudioParams
{
  public channel: 'whatsapp';

  public context?: WhatsAppContext;
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
  public constructor(params: WhatsAppAudioParams) {
    super(params);
    this.channel = 'whatsapp';
    if (params.context) {
      this.context = params.context;
    }
  }
}
