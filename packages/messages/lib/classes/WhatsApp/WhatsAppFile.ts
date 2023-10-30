import { AbstractFileMessage } from '../AbstractFileMessage';
import { WhatsAppFileParams } from '../../types';

/**
 * Represents a file message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppFile
  extends AbstractFileMessage
  implements WhatsAppFileParams
{
  public channel: 'whatsapp';

  /**
   * Constructs a new `WhatsAppFile` instance for WhatsApp.
   *
   * @param {WhatsAppFileParams} params - The parameters for creating a WhatsApp file message.
   */
  public constructor(params: WhatsAppFileParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
