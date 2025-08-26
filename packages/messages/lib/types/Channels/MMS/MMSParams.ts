import { MessageParams } from '../../MessageParams.js';
import { Channels } from '../../../enums/Channels.js';

/**
 * Represents the base parameters for MMS Message
 *
 * @group MMS
 * @category Parameters
 */
export type MMSParams = {
  channel: Channels.MMS | string;

  ttl?: number;
} & MessageParams
