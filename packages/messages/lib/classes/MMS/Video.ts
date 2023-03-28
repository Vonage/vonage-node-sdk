import { VideoObject } from '../../interfaces';
import { MessageParamsVideo, MessageVideoType } from '../../types';
import { MMSVideo } from './MMSVideo';

export class Video extends MMSVideo {
  constructor(
    video: VideoObject,
    to?: string,
    from?: string,
    clientRef?: string,
  ) {
    super({
      video: video as MessageVideoType,
      to: to,
      from: from,
      clientRef: clientRef,
    } as MessageParamsVideo);
  }
}
