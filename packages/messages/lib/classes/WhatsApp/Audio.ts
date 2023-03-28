import { AudioObject } from '../../interfaces/AudioObject';
import { WhatsAppAudio } from './WhatsAppAudio';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use WhatsAppAudio instead
 */
export class Audio extends WhatsAppAudio {
  constructor(
    audio: AudioObject,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    log('Please update to use the WhatsAppAudio class instead');
    super({
      audio: audio,
      to: to,
      from: from,
      clientRef: clientRef,
    });
  }
}
