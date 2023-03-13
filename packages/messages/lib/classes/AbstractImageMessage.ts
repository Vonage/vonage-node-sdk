import { MessageImageInterface } from '../interfaces';
import { AbstractMessage } from './AbsctractMessage';
import { MessageImageType } from '../types';
import { MessageParamsImage } from '../types';

export abstract class AbstractImageMessage
  extends AbstractMessage
  implements MessageImageInterface
{
  public messageType: 'image';
  public image: MessageImageType;

  constructor(params: MessageParamsImage) {
    super(params);
    this.image = params.image;
    this.messageType = 'image';
  }
}
