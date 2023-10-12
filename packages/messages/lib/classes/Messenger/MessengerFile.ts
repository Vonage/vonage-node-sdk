import { AbstractFileMessage } from '../AbstractFileMessage';
import { MessageParamsFile, MessengerFileParams } from '../../types';

/**
 * Represents a file message for the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerFile
  extends AbstractFileMessage
  implements MessageParamsFile
{
  /**
   * The channel for this message (always 'messenger').
   */
  public channel: 'messenger';

  /**
   * The messenger information for this message.
   */
  public messenger;

  /**
   * Sends a file message to the Facebook Messenger channel.
   *
   * @param {MessengerFileParams} params - The parameters for creating a Messenger file message.
   *
   * @example
   * ```ts
   * import { MessengerFile } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MessengerFile({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  file: {
   *    url: 'https://example.com/image.jpg',
   *    caption: 'This is an image',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: MessengerFileParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
