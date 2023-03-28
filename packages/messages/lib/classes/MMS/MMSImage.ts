import { ImageObject, MMSImageInterface } from '../../interfaces';
import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessageImageType, MessageParamsImage } from '../../types';

export class MMSImage
  extends AbstractImageMessage
  implements MMSImageInterface
{
  public channel: 'mms';

  constructor(
    params: MessageParamsImage | ImageObject,
    to?: string,
    from?: string,
    clientRef?: string,
  ) {
    if (to) {
      params = {
        image: params as MessageImageType,
        to: to,
        from: from,
        clientRef: clientRef,
      };
    }
    super(params as MessageParamsImage);
    this.channel = 'mms';
  }
}
