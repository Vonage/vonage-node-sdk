import { MessageFileType } from '../../MessageFileType';
import { MessageParamsFile } from '../../MessageParamsFile';
import { MessengerParams } from './MessengerParams';

/**
 * Represents parameters for sending a file message via the Messenger platform.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerFileParams = {
  file: MessageFileType;
} & MessengerParams & MessageParamsFile;
