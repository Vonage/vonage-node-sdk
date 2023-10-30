import { AbstractMessage } from '../AbstractMessage';
import { WhatsAppCustomType, WhatsAppCustomParams } from '../../types';

/**
 * Represents a custom message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppCustom
  extends AbstractMessage
  implements WhatsAppCustomParams
{
  public channel: 'whatsapp';
  public messageType: 'custom';
  public custom: WhatsAppCustomType;

  /**
   * Constructs a new `WhatsAppCustom` instance for WhatsApp.
   *
   * @param {WhatsAppCustomParams} params - The parameters for creating a WhatsApp custom message.
   */
  public constructor(params: WhatsAppCustomParams) {
    super(params);
    this.custom = params.custom;
    this.channel = 'whatsapp';
    this.messageType = 'custom';
  }
}
