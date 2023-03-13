import { AbstractTextMessage } from '../AbstractTextMessage';
import { MessengerTextInterface } from '../../interfaces';
import { MessengerTextParams, MessengerType } from '../../types';

export class MessengerText
  extends AbstractTextMessage
  implements MessengerTextInterface
{
  public channel: 'messenger';
  public messenger: MessengerType;

  public constructor(params: MessengerTextParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
