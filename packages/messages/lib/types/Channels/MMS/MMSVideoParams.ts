import { MessageParams } from '../../MessageParams';
import { MessageVideoType } from '../../MessageVideoType';
import { MMSParams } from './MMSParams';

/**
 * Represents the parameters for sending a video message on the MMS channel.
 *
 * This type combines the common message parameters from `MessageParams` with video-specific parameters
 * defined in `MessageVideoType`. It is used when creating a video message for the MMS channel.
 *
 * @group MMS
 * @category Parameters
 */
export type MMSVideoParams = MMSParams & MessageParams & MessageVideoType;
