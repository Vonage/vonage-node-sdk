import { MessageParams } from '../../MessageParams';
import { MessageImageType } from '../../MessageImageType';

/**
 * Represents the parameters for sending an image message on the MMS channel.
 *
 * This type combines the common message parameters from `MessageParams` with image-specific parameters
 * defined in `MessageImageType`. It is used when creating an image message for the MMS channel.
 *
 * @group MMS
 * @category Parameters
 */
export type MMSImageParams = MessageParams & MessageImageType;
