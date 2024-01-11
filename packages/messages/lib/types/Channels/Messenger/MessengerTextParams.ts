import { MessageParamsText } from '../../MessageParamsText';
import { MessengerParams } from './MessengerParams';

/**
 * Represents parameters for sending a text message via the Messenger platform.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerTextParams = MessengerParams & MessageParamsText;
