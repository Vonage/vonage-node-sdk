import { MessageParamsFile } from '../../MessageParamsFile';
import { MessengerParams } from './MessengerParams';

/**
 * Represents parameters for sending a file message via the Messenger platform.
 * Combines parameters from both MessengerParams and MessageParamsFile.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerFileParams = MessengerParams & MessageParamsFile
