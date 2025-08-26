import { MessageParamsText } from '../../MessageParamsText.js';
import { MessengerParams } from './MessengerParams.js';

/**
 * Represents parameters for sending a text message via the Messenger platform.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerTextParams = MessengerParams & MessageParamsText;
