import { VideoObject } from '../../interfaces';
import { MessageParamsVideo, MessageVideoType } from '../../types';
import { MMSVideo } from './MMSVideo';
import debug from 'debug';

const log = debug('vonage:messages:mms');

/**
 * @deprecated please use MMSVideo instead
 *
 * @group MMS
 */
export class Video extends MMSVideo {
  constructor(
    video: VideoObject,
    to?: string,
    from?: string,
    clientRef?: string,
  ) {
    log('Please update to use the MMSVideo class instead');
    super({
      video: video as MessageVideoType,
      to: to,
      from: from,
      clientRef: clientRef,
    } as MessageParamsVideo);
  }
}
