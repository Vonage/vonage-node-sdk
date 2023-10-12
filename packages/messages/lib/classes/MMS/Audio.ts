import { AudioObject } from '../../interfaces';
import { MessageAudioType, MessageParamsAudio } from '../../types';
import { MMSAudio } from './MMSAudio';
import debug from 'debug';

const log = debug('vonage:messages:mms');

/**
 * Represents an audio message for the MMS channel.
 *
 * @deprecated Please use the MMSAudio class instead.
 *
 * @group MMS
 */
export class Audio extends MMSAudio {
  /**
   * Constructs a new `Audio` instance for the MMS channel.
   *
   * @param {AudioObject} audio - The audio content of the message.
   * @param {string} to - The recipient of the message.
   * @param {string} from - The sender of the message.
   * @param {string} clientRef - The client reference for the message.
   */
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
