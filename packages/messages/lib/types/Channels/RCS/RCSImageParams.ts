import { MessageParamsImage } from '../../MessageParamsImage';
import { Channels } from '../../../enums';

/**
 * Represents the parameters for sending an image message using RCS.
 */
export type RCSImageParams = MessageParamsImage & {
  /**
   * The channel to send to. You must provide `rcs` in this field.
   */
  channel?: Channels.RCS;
};
