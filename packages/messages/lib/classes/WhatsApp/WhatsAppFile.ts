import { AbstractFileMessage } from '../AbstractFileMessage';
import { WhatsAppFileInterface } from '../../interfaces';
import { WhatsAppFileParams } from '../../types';

export class WhatsAppFile
  extends AbstractFileMessage
  implements WhatsAppFileInterface
{
  public channel: 'whatsapp';

  public constructor(params: WhatsAppFileParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
