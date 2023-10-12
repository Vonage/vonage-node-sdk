import { ViberService } from './ViberService';
import { ViberAction } from './ViberAction';
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
