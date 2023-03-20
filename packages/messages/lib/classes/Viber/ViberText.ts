import { ViberTextInterface } from '../../interfaces';
import { AbstractTextMessage } from '../AbstractTextMessage';
import { ViberActionParams } from '../../types';
import { ViberTextParams } from '../../types';

export class ViberText
  extends AbstractTextMessage
  implements ViberTextInterface
{
  public channel: 'viber_service';
  public viberService: ViberActionParams;

  constructor(params: ViberTextParams) {
    super(params);
    this.viberService = params.viberService;
    this.channel = 'viber_service';
  }
}
