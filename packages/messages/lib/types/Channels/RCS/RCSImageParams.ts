import { MessageParamsImage } from '../../MessageParamsImage.js';
import { Channels } from '../../../enums/index.js';
import { RCSParams } from './RCSParams.js';

/**
 * Represents the parameters for sending an image message using RCS.
 */
export type RCSImageParams = RCSParams & MessageParamsImage & {
  /**
   * The channel to send to. You must provide `rcs` in this field.
   */
  channel?: Channels.RCS | string;
};
