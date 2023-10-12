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
   * Sends a custom message to a WhatsApp user.
   *
   * @param {WhatsAppCustomParams} params - The parameters for creating a WhatsApp custom message.
   * @example
   * ```ts
   * import { WhatsAppCustom } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppCustom({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  custom: {
   *    type: 'template',
   *    template: {
   *      namespace: 'your-namespace',
   *      name: 'your-template-name',
   *    },
   *  }
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: WhatsAppCustomParams) {
    super(params);
    this.custom = params.custom;
    this.channel = 'whatsapp';
    this.messageType = 'custom';
  }
}
