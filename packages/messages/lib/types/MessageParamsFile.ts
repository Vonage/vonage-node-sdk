import { MessageParams } from './MessageParams.js';
import { MessageFileType } from './MessageFileType.js';
import { MessageTypes } from '../enums/MessageTypes.js';

/**
 * Represents the parameters for a message with a file attachment.
 */
export type MessageParamsFile = {
  messageType: MessageTypes.FILE | string;

  /**
   * The file attachment content.
   */
  file: MessageFileType;
} & MessageParams;
