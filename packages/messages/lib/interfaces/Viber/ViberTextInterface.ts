import { MessageTextInterface } from '../MessageTextInterface';
import { ViberChannelInterface } from './ViberChannelInterface';
import { ViberActionParams } from '../../types';

/**
 * Represents the Viber text interface.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface ViberTextInterface
  extends MessageTextInterface,
    ViberChannelInterface {
  /**
   * Represents Viber-specific action parameters.
   */
  viberService: ViberActionParams;
}
