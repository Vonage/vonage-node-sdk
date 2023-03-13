import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { MMSVideoInterface } from '../../interfaces';
import { MessageParamsVideo } from '../../types';

export class MMSVideo
  extends AbstractVideoMessage
  implements MMSVideoInterface
{
  public channel: 'mms';

  constructor(params: MessageParamsVideo) {
    super(params);
    this.channel = 'mms';
  }
}
