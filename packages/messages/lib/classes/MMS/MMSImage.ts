import { MMSImageInterface } from '../../interfaces';
import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessageParamsImage } from '../../types';

export class MMSImage
  extends AbstractImageMessage
  implements MMSImageInterface
{
  public channel: 'mms';

  constructor(params: MessageParamsImage) {
    super(params);
    this.channel = 'mms';
  }
}
