import { AbstractMessage } from './AbsctractMessage';
import { MessageFileInterface } from '../interfaces';
import { MessageFileType, MessageParamsFile } from '../types';

export abstract class AbstractFileMessage
  extends AbstractMessage
  implements MessageFileInterface
{
  public messageType: 'file';
  public file: MessageFileType;

  protected constructor(params: MessageParamsFile) {
    super(params);
    this.file = params.file;
    this.messageType = 'file';
  }
}
