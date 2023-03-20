import { ViberFileInterface } from '../../interfaces';
import { AbstractFileMessage } from '../AbstractFileMessage';
import { ViberFileParams } from '../../types';

export class ViberFile
  extends AbstractFileMessage
  implements ViberFileInterface
{
  public channel: 'viber_service';
  public viberService;

  constructor(params: ViberFileParams) {
    super(params);
    this.viberService = params.viberService;
    this.channel = 'viber_service';
  }
}
