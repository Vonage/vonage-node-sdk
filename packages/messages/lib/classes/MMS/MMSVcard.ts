import { AbstractVcardMessage } from '../AbstractVcardMessage';
import { MMSVcardInterface } from '../../interfaces';
import { MessageParamsVcard } from '../../types';

export class MMSVcard
  extends AbstractVcardMessage
  implements MMSVcardInterface
{
  public channel: 'mms';

  constructor(params: MessageParamsVcard) {
    super(params);
    this.channel = 'mms';
  }
}
