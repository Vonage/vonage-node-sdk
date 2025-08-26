import { MessageParamsAudio } from '../../MessageParamsAudio.js';
import { MessengerParams } from './MessengerParams.js';

/**
 * Represents parameters for sending an audio message via the Messenger platform.
 * Combines parameters from both MessengerParams and MessageParamsAudio.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerAudioParams = MessengerParams & MessageParamsAudio
