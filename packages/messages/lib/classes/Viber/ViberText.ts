import { AbstractTextMessage } from '../AbstractTextMessage';
import { ViberActionParams } from '../../types';
import { ViberTextParams } from '../../types';
import { Channels } from '../../enums';

/**
 * Represents a text message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberText
  extends AbstractTextMessage
  implements ViberTextParams
{
  /**
   * The channel for this message (always 'viber_service').
   */
  public channel: Channels.VIBER = Channels.VIBER;

  public viberService: ViberActionParams;

  /**
   * Send a text message using the Viber Service channel.
   *
   * @param {ViberTextParams} params - The parameters for the ViberText message.
   *
   * @example
   * ```ts
   * import { ViberText } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new ViberText({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
   *  viberService: {
   *    action: {
   *      url: 'https://my-host.com/my-path',
   *      text: 'My button text',
   *    },
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params: Omit<ViberTextParams, 'channel' | 'messageType'>) {
    super(params);
    this.viberService = params.viberService;
  }
}
