import { ViberChannelInterface } from './ViberChannelInterface.js';
import { MessageImageInterface } from '../MessageImageInterface.js';
import { ViberActionParams } from '../../types/index.js';

/**
 * Represents the Viber image interface.
 *
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface ViberImageInterface
  extends ViberChannelInterface,
  MessageImageInterface {
  /**
   * Represents Viber-specific action parameters.
   */
  viberService: ViberActionParams;
}
