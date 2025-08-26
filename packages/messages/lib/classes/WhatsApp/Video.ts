import { VideoObject } from '../../interfaces/index.js';
import { WhatsAppVideo } from './WhatsAppVideo.js';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use the WhatsAppVideo class instead
 *
 * @group WhatsApp
 */
export class Video extends WhatsAppVideo {
  /**
   * Constructs a new `Video` instance for WhatsApp.
   *
   * @param {VideoObject} video - The video message content.
   * @param {string} to - The recipient's WhatsApp number.
   * @param {string} from - The sender's WhatsApp number.
   * @param {string} clientRef - (Optional) A unique client reference for the message.
   */
  constructor(
    video: VideoObject,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    log('Please update to use the WhatsAppVideo class instead');
    super({
      to: to,
      from: from,
      clientRef: clientRef,
      video: video,
    });
  }
}
