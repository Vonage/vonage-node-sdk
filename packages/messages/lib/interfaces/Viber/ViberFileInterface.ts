import { ViberChannelInterface } from './ViberChannelInterface';
import { MessageFileInterface } from '../MessageFileInterface';
import { ViberService } from '../../types';

/**
 * Represents the Viber file interface.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 *
 */
export interface ViberFileInterface
  extends ViberChannelInterface,
    MessageFileInterface {
  /**
   * Represents Viber-specific service information.
   */
  viberService: ViberService;
}
