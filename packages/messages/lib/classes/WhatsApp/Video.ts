import { VideoObject } from '../../interfaces/VideoObject';
import { WhatsAppVideo } from './WhatsAppVideo';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use WhatsAppVideo instead
 */
export class Video extends WhatsAppVideo {
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
