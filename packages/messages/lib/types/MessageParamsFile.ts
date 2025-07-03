import { MessageParams } from './MessageParams';
import { MessageFileType } from './MessageFileType';
import { MessageTypes } from '../enums/MessageTypes';

/**
 * Represents the parameters for a message with a file attachment.
 */
export type MessageParamsFile = {
  messageType: MessageTypes.FILE;

  /**
   * The file attachment content.
   */
  file: MessageFileType;
} & MessageParams;
