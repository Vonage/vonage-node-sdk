import { AudioObject } from '../../interfaces/AudioObject';
import { WhatsAppAudio } from './WhatsAppAudio';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use the WhatsAppAudio class instead
 *
 * @group WhatsApp
 */
export class Audio extends WhatsAppAudio {
  /**
   * Constructs a new `Audio` instance for WhatsApp.
   *
   * @param {AudioObject} audio - The audio content of the message.
   * @param {string} to - The recipient's WhatsApp number.
   * @param {string} from - The sender's WhatsApp number.
   * @param {string} clientRef - (Optional) A unique client reference for the message.
   */
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
