import { ViberChannelInterface } from './ViberChannelInterface';
import { MessageImageInterface } from '../MessageImageInterface';
import { ViberActionParams } from '../../types';

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
