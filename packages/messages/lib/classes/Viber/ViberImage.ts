import { AbstractImageMessage } from '../AbstractImageMessage';
import { ViberImageInterface } from '../../interfaces';
import { ViberImageParams } from '../../types';
import { ViberActionParams } from '../../types';

export class ViberImage
  extends AbstractImageMessage
  implements ViberImageInterface
{
  public channel: 'viber_service';
  public viberService: ViberActionParams;

  constructor(params: ViberImageParams) {
    super(params);
    this.viberService = params.viberService;
    this.channel = 'viber_service';
  }
}
