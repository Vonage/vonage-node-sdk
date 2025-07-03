import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessengerImageParams } from '../../types';
import { Channels } from '../../enums';

/**
 * Represents an image message for the Messenger channel.
 *
 * This class extends the `AbstractImageMessage` class and implements the `MessengerImageParams` interface.
 * It is used for sending image messages on the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerImage
  extends AbstractImageMessage
  implements MessengerImageParams
{
  /**
   * The channel for this message (always 'messenger').
   */
  public channel: Channels.MESSENGER = Channels.MESSENGER;

  /**
   * Additional Messenger-specific parameters for the image message.
   */
  public messenger;

  /**
   * Send an image message using the Facebook Messenger channel.
   *
   * @param {MessengerImageParams} params - The parameters for the image message.
   * @example
   * ```ts
   * import { MessengerImage } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MessengerImage({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  image: {
   *    url: 'https://example.com/image.jpg',
   *    caption: 'This is an image',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: Omit<MessengerImageParams, 'channel' | 'messageType'>) {
    super(params);
    this.messenger = params.messenger;
  }
}
