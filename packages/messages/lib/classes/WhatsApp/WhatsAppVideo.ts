import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { WhatsAppVideoInterface } from '../../interfaces';
import { WhatsAppVideoParams } from '../../types';

export class WhatsAppVideo
  extends AbstractVideoMessage
  implements WhatsAppVideoInterface
{
  public channel: 'whatsapp';

  public constructor(params: WhatsAppVideoParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
