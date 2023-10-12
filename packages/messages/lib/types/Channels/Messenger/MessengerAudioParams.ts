import { MessageParamsAudio } from '../../MessageParamsAudio';
import { MessengerParams } from './MessengerParams';

/**
 * Represents parameters for sending an audio message via the Messenger platform.
 * Combines parameters from both MessengerParams and MessageParamsAudio.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerAudioParams = MessengerParams & MessageParamsAudio
