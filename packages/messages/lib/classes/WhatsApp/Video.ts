import { VideoObject } from '../../interfaces/VideoObject';
import { WhatsAppVideo } from './WhatsAppVideo';

export class Video extends WhatsAppVideo {
  constructor(
    video: VideoObject,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    super({
      to: to,
      from: from,
      clientRef: clientRef,
      video: video,
    });
  }
}
