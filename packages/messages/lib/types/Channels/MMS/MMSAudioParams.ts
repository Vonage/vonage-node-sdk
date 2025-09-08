import { MessageParams } from '../../MessageParams.js';
import { MessageAudioType } from '../../MessageAudioType.js';
import { MMSParams } from './MMSParams.js';

/**
 * Represents the parameters for sending an audio message on the MMS channel.
 *
 * This type combines the common message parameters from `MessageParams` with audio-specific parameters
 * defined in `MessageAudioType`. It is used when creating an audio message for the MMS channel.
 *
 * @group MMS
 * @category Parameters
 */
export type MMSAudioParams = {
  audio: {
    caption?: string
  } & MessageAudioType

} & MMSParams & MessageParams & MessageAudioType;
