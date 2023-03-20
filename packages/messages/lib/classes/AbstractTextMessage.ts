import { AbstractMessage } from './AbstractMessage';
import { MessageTextInterface } from '../interfaces';
import { MessageParamsText } from '../types';

export abstract class AbstractTextMessage
  extends AbstractMessage
  implements MessageTextInterface
{
  public messageType: 'text';
  public text: string;

  constructor(params: MessageParamsText) {
    super(params);
    this.text = params.text;
    this.messageType = 'text';
  }
}
