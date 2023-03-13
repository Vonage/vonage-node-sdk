import { AbstractTextMessage } from '../AbstractTextMessage';
import { WhatsAppTextInterface } from '../../interfaces';
import { WhatsAppTextParams } from '../../types';

export class WhatsAppText
  extends AbstractTextMessage
  implements WhatsAppTextInterface
{
  public channel: 'whatsapp';

  public constructor(params: WhatsAppTextParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
