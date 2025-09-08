import { ViberService } from './ViberService.js';
import { ViberAction } from './ViberAction.js';
/**
 * Represents parameters for a Viber action message.
 *
 * @group Viber
 * @category Parameters
 */
export type ViberActionParams = {
  /**
   * The action associated with the Viber message.
   */
  action: ViberAction;
} & ViberService;
