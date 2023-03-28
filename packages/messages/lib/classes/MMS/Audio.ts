import { AudioObject } from '../../interfaces';
import { MessageAudioType, MessageParamsAudio } from '../../types';
import { MMSAudio } from './MMSAudio';
import debug from 'debug';

const log = debug('vonage:messages:mms');

/**
 * @deprecated please use MMSAudio instead
 */
export class Audio extends MMSAudio {
  public constructor(
    audio: AudioObject,
    to?: string,
    from?: string,
    clientRef?: string,
  ) {
    log('Please update to use the MMSAudio class instead');
    const params = {
      audio: audio as MessageAudioType,
      to: to,
      from: from,
      clientRef: clientRef,
    };

    super(params as MessageParamsAudio);
    this.channel = 'mms';
  }
}
