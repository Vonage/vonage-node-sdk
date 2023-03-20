import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { ViberVideoInterface } from '../../interfaces';
import { ViberVideoParams } from '../../types';

export class ViberVideo
  extends AbstractVideoMessage
  implements ViberVideoInterface
{
  public channel: 'viber_service';
  public viberService;

  constructor(params: ViberVideoParams) {
    super(params);
    this.viberService = params.viberService;
    this.channel = 'viber_service';
  }
}
