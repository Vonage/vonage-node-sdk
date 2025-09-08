import { MessageParams } from '../../MessageParams.js';
import { MessageVcardType } from '../../MessageVcardType.js';
import { MMSParams } from './MMSParams.js';

/**
 * Represents the parameters for sending a vCard message on the MMS channel.
 *
 * This type combines the common message parameters from `MessageParams` with vCard-specific parameters
 * defined in `MessageVcardType`. It is used when creating a vCard message for the MMS channel.
 *
 * @group MMS
 * @category Parameters
 */
export type MMSVcardParams = {
  /**
   * The amount of time in seconds the message will live for
   */
  ttl?: number;
} & MMSParams & MessageParams & MessageVcardType;
