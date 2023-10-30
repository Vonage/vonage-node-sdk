import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { WhatsAppVideoParams } from '../../types';

/**
 * Represents a video message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppVideo
  extends AbstractVideoMessage
  implements WhatsAppVideoParams
{
  public channel: 'whatsapp';

  /**
   * Constructs a new `WhatsAppVideo` instance for WhatsApp.
   *
   * @param {WhatsAppVideoParams} params - The parameters for creating a WhatsApp video message.
   */
  public constructor(params: WhatsAppVideoParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
