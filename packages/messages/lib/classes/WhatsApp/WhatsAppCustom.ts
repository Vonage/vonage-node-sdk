import { AbstractMessage } from '../AbstractMessage';
import { WhatsAppCustomInterface } from '../../interfaces';
import { WhatsAppCustomType, WhatsAppCustomParams } from '../../types';

export class WhatsAppCustom
  extends AbstractMessage
  implements WhatsAppCustomInterface
{
  public channel: 'whatsapp';
  public messageType: 'custom';
  public custom: WhatsAppCustomType;

  public constructor(params: WhatsAppCustomParams) {
    super(params);
    this.custom = params.custom;
    this.channel = 'whatsapp';
    this.messageType = 'custom';
  }
}
