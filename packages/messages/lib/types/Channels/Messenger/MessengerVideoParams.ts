import { MessageParamsVideo } from '../../MessageParamsVideo';
import { MessengerParams } from './MessengerParams';

/**
 * Represents parameters for sending a video message via the Messenger platform.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerVideoParams = MessengerParams & MessageParamsVideo;
