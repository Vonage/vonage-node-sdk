import { AbstractMessage } from './AbstractMessage';
import { MessageFileType, MessageParamsFile } from '../types';
import { MessageTypes } from '../enums/MessageTypes';

/**
 * An abstract base class for file messages.
 */
export abstract class AbstractFileMessage
  extends AbstractMessage
  implements MessageParamsFile
{
  /**
   * The type of message (always 'file').
   */
  public messageType: MessageTypes.FILE = MessageTypes.FILE;

  public file: MessageFileType;

  /**
   * Constructs a new `AbstractFileMessage` instance.
   *
   * @param {MessageParamsFile} params - The parameters for creating a file message.
   */
  protected constructor(params: Omit<MessageParamsFile, 'channel' | 'messageType'>) {
    super(params);
    this.file = params.file;
  }
}
