import { AbstractMessage } from './AbsctractMessage';
import { MessageVideoType } from '../types';
import { MessageVideoInterface } from '../interfaces';
import { MessageParamsVideo } from '../types';

export abstract class AbstractVideoMessage
  extends AbstractMessage
  implements MessageVideoInterface
{
  public messageType: 'video';
  public video: MessageVideoType;

  constructor(params: MessageParamsVideo) {
    super(params);
    this.video = params.video;
    this.messageType = 'video';
  }
}
