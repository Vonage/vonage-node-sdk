import { AbstractAudioMessage } from '../AbstractAudioMessage';
import { WhatsAppAudioInterface } from '../../interfaces';
import { WhatsAppAudioParams } from '../../types';

export class WhatsAppAudio
  extends AbstractAudioMessage
  implements WhatsAppAudioInterface
{
  public channel: 'whatsapp';

  public constructor(params: WhatsAppAudioParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
