import { MessageParams } from './MessageParams';
import { MessageFileType } from './MessageFileType';

/**
 * Represents the parameters for a message with a file attachment.
 */
export type MessageParamsFile = {
  /**
   * The file attachment content.
   */
  file: MessageFileType;
} & MessageParams;
