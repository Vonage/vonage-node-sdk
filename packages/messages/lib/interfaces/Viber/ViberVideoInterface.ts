import { ViberChannelInterface } from './ViberChannelInterface';
import { MessageVideoInterface } from '../MessageVideoInterface';
import { ViberService } from '../../types';

/**
 * Represents the Viber video interface.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface ViberVideoInterface
  extends ViberChannelInterface,
    MessageVideoInterface {
  /**
   * Represents Viber-specific video service parameters.
   */
  viberService: {
    /**
     * The duration of the video in seconds.
     */
    duration: string;
    /**
     * The file size of the video in MB.
     */
    fileSize: string;
  } & ViberService;
}
