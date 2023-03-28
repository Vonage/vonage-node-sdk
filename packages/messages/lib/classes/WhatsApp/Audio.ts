import { AudioObject } from '../../interfaces/AudioObject';
import { WhatsAppAudio } from './WhatsAppAudio';

/**
 * @deprecated please use Whats App Audio
 */
export class Audio extends WhatsAppAudio {
  constructor(
    audio: AudioObject,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    super({
      audio: audio,
      to: to,
      from: from,
      clientRef: clientRef,
    });
  }
}
