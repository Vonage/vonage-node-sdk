import { MMSVideo } from './MMSVideo.js';
import debug from 'debug';

const log = debug('vonage:messages:mms');

/**
 * @deprecated please use MMSVideo instead
 *
 * @group MMS
 */
export class Video extends MMSVideo {
  constructor(
  video,
  to,
  from,
  clientRef)
  {
    log('Please update to use the MMSVideo class instead');
    super({
      video: video,
      to: `${to}`,
      from: `${from}`,
      clientRef: clientRef
    });
  }
}
