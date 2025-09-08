import { MessageTextInterface } from '../MessageTextInterface.js';
import { ViberChannelInterface } from './ViberChannelInterface.js';
import { ViberActionParams } from '../../types/index.js';

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
