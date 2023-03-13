import { AbstractImageMessage } from '../AbstractImageMessage';
import { WhatsAppImageInterface } from '../../interfaces';
import { WhatsAppImageParams } from '../../types';

export class WhatsAppImage
  extends AbstractImageMessage
  implements WhatsAppImageInterface
{
  public channel: 'whatsapp';

  public constructor(params: WhatsAppImageParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
