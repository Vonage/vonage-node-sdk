import { AbstractFileMessage } from '../AbstractFileMessage';
import { MessengerFileInterface } from '../../interfaces';
import { MessengerFileParams } from '../../types';

export class MessengerFile
  extends AbstractFileMessage
  implements MessengerFileInterface
{
  public channel: 'messenger';
  public messenger;

  public constructor(params: MessengerFileParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
