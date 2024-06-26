import { ViberCategory } from '../../../enums';
import { ViberAction } from './ViberAction';

/**
 * Represents parameters for a Viber service message.
 *
 * @group Viber
 * @category Parameters
 */
export type ViberService = {
  /**
   * The time-to-live (TTL) of the message to be delivered in seconds.
   * If the message is not delivered within this time, it will be deleted.
   */
  ttl: number;

  /**
   * The Viber-specific type definition.
   * To use "template," please contact your Vonage Account Manager to set up templates.
   * To find out more, please visit the product page.
   */
  type: string;

  /**
   * The category of the Viber service message.
   */
  category: ViberCategory;

  action?: ViberAction
};
