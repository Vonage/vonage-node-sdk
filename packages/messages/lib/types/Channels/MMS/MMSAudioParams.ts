import { MessageParams } from "../../MessageParams";
import { MessageAudioType } from "../../MessageAudioType";

/**
 * Represents the parameters for sending an audio message on the MMS channel.
 *
 * This type combines the common message parameters from `MessageParams` with audio-specific parameters
 * defined in `MessageAudioType`. It is used when creating an audio message for the MMS channel.
 *
 * @group MMS
 * @category Parameters
 */
export type MMSAudioParams = MessageParams & MessageAudioType;
