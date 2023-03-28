import { AudioObject } from '../../interfaces';
import { MessageAudioType, MessageParamsAudio } from '../../types';
import { MMSAudio } from './MMSAudio';

export class Audio extends MMSAudio {
  public constructor(
    audio: AudioObject,
    to?: string,
    from?: string,
    clientRef?: string,
  ) {
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
