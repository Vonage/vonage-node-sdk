import { MessageParamsText } from '../../MessageParamsText';
import { MMSParams } from './MMSParams';

/**
 * Represents parameters for sending a text message via MMS with action buttons.
 *
 * @group Viber
 * @category Parameters
 */
export type MMSTextParams = {
  /**
   * The text content of the message.
   */
  text: string;
} & MMSParams & MessageParamsText;
