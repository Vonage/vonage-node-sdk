import { MMSAudio } from './MMSAudio.js';
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
  constructor(
  audio,
  to,
  from,
  clientRef)
  {
    log('Please update to use the MMSAudio class instead');
    super({
      audio: audio,
      to: `${to}`,
      from: `${from}`,
      clientRef: clientRef
    });
  }
}
