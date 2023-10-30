import { AbstractImageMessage } from '../AbstractImageMessage';
import { WhatsAppImageParams } from '../../types';

/**
 * Represents an image message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppImage
  extends AbstractImageMessage
  implements WhatsAppImageParams
{
  public channel: 'whatsapp';

  /**
   * Constructs a new `WhatsAppImage` instance for WhatsApp.
   *
   * @param {WhatsAppImageParams} params - The parameters for creating a WhatsApp image message.
   */
  public constructor(params: WhatsAppImageParams) {
    super(params);
    this.channel = 'whatsapp';
  }
}
