import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessengerImageInterface } from '../../interfaces';
import { MessengerImageParams } from '../../types';

export class MessengerImage
  extends AbstractImageMessage
  implements MessengerImageInterface
{
  public channel: 'messenger';
  public messenger;

  public constructor(params: MessengerImageParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
