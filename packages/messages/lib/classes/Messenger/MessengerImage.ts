import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessengerImageParams } from '../../types';

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
   * The channel for sending the message, which is set to 'messenger'.
   */
  public channel: 'messenger';

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
  public constructor(params: MessengerImageParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
