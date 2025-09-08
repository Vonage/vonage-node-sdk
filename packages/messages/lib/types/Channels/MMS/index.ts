import { MMSAudioParams } from './MMSAudioParams.js';
import { MMSImageParams } from './MMSImageParams.js';
import { MMSVcardParams } from './MMSVcardParams.js';
import { MMSVideoParams } from './MMSVideoParams.js';
import { Channels } from '../../../enums/index.js';

export * from './MMSAudioParams.js';
export * from './MMSImageParams.js';
export * from './MMSVcardParams.js';
export * from './MMSVideoParams.js';

/**
 * Represents a union type that can be any of the MMS-specific message parameters.
 *
 * @group MMS
 * @category Parameters
 */
export type AnyMMSParams =
  | MMSAudioParams
  | MMSImageParams
  | MMSVcardParams
  | MMSVideoParams;

/**
 * Represents a union type that includes the 'channel' property set to 'mms'
 * along with any of the MMS-specific message parameters.
 *
 * @group MMS
 */
export type AnyMMSChannel = {
  /**
   * The channel through which the message will be sent, which is 'mms' for MMS.
   */
  channel: Channels.MMS | string;
} & AnyMMSParams;
