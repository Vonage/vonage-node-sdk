import { AbstractAudioMessage } from '../AbstractAudioMessage';
import { WhatsAppAudioParams } from '../../types';

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

  /**
   * Constructs a new `WhatsAppAudio` instance for WhatsApp.
   *
   * @param {WhatsAppAudioParams} params - The parameters for creating a WhatsApp audio message.
   */
  public constructor(params: WhatsAppAudioParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
