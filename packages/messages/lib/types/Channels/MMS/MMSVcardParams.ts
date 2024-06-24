import { MessageParams } from '../../MessageParams';
import { MessageVcardType } from '../../MessageVcardType';

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
} & MessageParams &
  MessageVcardType;
