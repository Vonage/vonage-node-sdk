import { MessageParamsText } from '../../MessageParamsText';
import { ViberActionParams } from './ViberActionParams';
import { ViberParams } from './ViberParams';

/**
 * Represents parameters for sending a text message via Viber with action buttons.
 *
 * @group Viber
 * @category Parameters
 */
export type ViberTextParams = {
  /**
   * The Viber service and action parameters for the message.
   */
  viberService: ViberActionParams;

  /**
   * The text content of the message.
   */
  text: string;
} & ViberParams & MessageParamsText
