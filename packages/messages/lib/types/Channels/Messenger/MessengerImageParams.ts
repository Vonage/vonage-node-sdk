import { MessageParamsImage } from '../../MessageParamsImage.js';
import { MessengerParams } from './MessengerParams.js';

/**
 * Represents parameters for sending an image message via the Messenger platform.
 * Combines parameters from both MessengerParams and MessageParamsImage.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerImageParams = MessengerParams & MessageParamsImage
