import { AbstractTextMessage } from '../AbstractTextMessage';

import { Channels } from '../../enums/';

/**
 * Represents a text message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppText extends
AbstractTextMessage
{
  /**
   * The channel for this message (always 'whatsapp').
   */
  channel = Channels.WHATSAPP;

  /**
  * A context used for quoting/replying/reacting to a specific message in a
  * conversation. When used for quoting or replying, the WhatsApp UI will
  * display the new message along with a contextual bubble that displays the
  * quoted/replied to message's content. When used for reacting the WhatsApp
  * UI will display the reaction emoji below the reacted to message.
  */
  context;

  /**
   * Send via MM Lite API only this is valid for marketing template messages
   * only, and for Alpha release only
   *
   * @deprecated
   */
  category;

  /**
   * Send a WhatsApp text message.
   *
   * @param {WhatsAppTextParams} params - The parameters for creating a WhatsApp text message.
   * @example
   * ```ts
   * import { WhatsAppText } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppText({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params) {
    super(params);
    if (params.context) {
      this.context = params.context;
    }
    this.category = params.category;
  }
}
