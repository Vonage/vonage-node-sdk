import { AbstractMessage } from './AbstractMessage';
import { MessageFileType, MessageParamsFile } from '../types';

/**
 * An abstract base class for file messages.
 */
export abstract class AbstractFileMessage
  extends AbstractMessage
  implements MessageParamsFile
{
  public messageType: 'file';
  public file: MessageFileType;

  /**
   * Constructs a new `AbstractFileMessage` instance.
   *
   * @param {MessageParamsFile} params - The parameters for creating a file message.
   */
  protected constructor(params: MessageParamsFile) {
    super(params);
    this.file = params.file;
    this.messageType = 'file';
  }
}
