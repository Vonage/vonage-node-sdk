import { MessageFileType } from '../../MessageFileType.js';
import { MessageParamsFile } from '../../MessageParamsFile.js';
import { MessengerParams } from './MessengerParams.js';

/**
 * Represents parameters for sending a file message via the Messenger platform.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerFileParams = {
  file: MessageFileType;
} & MessengerParams & MessageParamsFile;
