import { MessageParamsVideo } from '../../MessageParamsVideo.js';
import { MessengerParams } from './MessengerParams.js';

/**
 * Represents parameters for sending a video message via the Messenger platform.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerVideoParams = MessengerParams & MessageParamsVideo;
