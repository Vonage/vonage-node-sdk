import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { MessengerVideoInterface } from '../../interfaces';
import { MessengerType, MessengerVideoParams } from '../../types';

export class MessengerVideo
  extends AbstractVideoMessage
  implements MessengerVideoInterface
{
  public channel: 'messenger';
  public messenger: MessengerType;

  public constructor(params: MessengerVideoParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
