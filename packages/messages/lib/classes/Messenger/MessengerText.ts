import { AbstractTextMessage } from '../AbstractTextMessage';
import { MessengerTextParams, MessengerType } from '../../types';
import { Channels } from '../../enums';

/**
 * Represents a text message for the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerText
  extends AbstractTextMessage
  implements MessengerTextParams
{
  /**
   * The channel for this message (always 'messenger').
   */
  public channel: Channels.MESSENGER = Channels.MESSENGER;

  /**
   * The messenger information for this message.
   */
  public messenger: MessengerType;

  /**
   * Sends a text message to the Facebook Messenger channel.
   *
   * @param {MessengerTextParams} params - The parameters for creating a Messenger text message.
   *
   * @example
   * ```ts
   * import { MessengerText } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MessengerText({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: Omit<MessengerTextParams, 'channel' | 'messageType'>) {
    super(params);
    this.messenger = params.messenger;
  }
}
