import { MMSAudioParams }  from './MMSAudioParams';
import { MMSImageParams }  from './MMSImageParams';
import { MMSVcardParams }  from './MMSVcardParams';
import { MMSVideoParams }  from './MMSVideoParams';
import { Channels } from '../../../enums';

export * from './MMSAudioParams';
export * from './MMSImageParams';
export * from './MMSVcardParams';
export * from './MMSVideoParams';

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
  channel: Channels.MMS;
} & AnyMMSParams;
