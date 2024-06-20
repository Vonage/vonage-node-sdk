import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessageParamsImage } from '../../types';

/**
 * Represents an image message for the MMS channel.
 *
 * @group MMS
 */
export class MMSImage
  extends AbstractImageMessage
  implements MessageParamsImage
{
  public channel: 'mms';

  public ttl?: number;

  /**
   * Send an MMS image message.
   *
   * @param {MessageParamsImage} params - The parameters for creating the image message.
   * @example
   * ```ts
   * import { MMSImage } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MMSImage({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  image: {
   *    url: 'https://example.com/image.jpg',
   *    caption: 'This is an example image',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params: MessageParamsImage) {
    super(params);
    this.channel = 'mms';
    this.ttl = params.ttl;
  }
}
