import { AbstractTextMessage } from '../AbstractTextMessage';
import { WhatsAppTextParams } from '../../types';

/**
 * Represents a text message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppText
  extends AbstractTextMessage
  implements WhatsAppTextParams
{
  public channel: 'whatsapp';

  /**
   * Constructs a new `WhatsAppText` instance for WhatsApp.
   *
   * @param {WhatsAppTextParams} params - The parameters for creating a WhatsApp text message.
   */
  public constructor(params: WhatsAppTextParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
