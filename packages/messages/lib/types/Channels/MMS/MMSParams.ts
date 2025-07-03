import { MessageParams } from '../../MessageParams';
import { Channels } from '../../../enums/Channels';

/**
 * Represents the base parameters for MMS Message
 *
 * @group MMS
 * @category Parameters
 */
export type MMSParams = {
  channel: Channels.MMS;

  ttl?: number;
} & MessageParams
