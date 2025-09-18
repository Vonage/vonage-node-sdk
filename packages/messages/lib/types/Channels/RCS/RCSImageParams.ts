import { MessageParamsImage } from '../../MessageParamsImage';
import { Channels } from '../../../enums/';
import { RCSParams } from './RCSParams';

/**
 * Represents the parameters for sending an image message using RCS.
 */
export type RCSImageParams = RCSParams & MessageParamsImage & {
  /**
   * The channel to send to. You must provide `rcs` in this field.
   */
  channel?: Channels.RCS | string;
};
