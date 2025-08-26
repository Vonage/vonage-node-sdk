import { AbstractImageMessage } from '../AbstractImageMessage.js';
import { MessageParamsImage } from '../../types/index.js';
import { Channels } from '../../enums/index.js';

/**
 * Represents an image message for the MMS channel.
 *
 * @group MMS
 */
export class MMSImage
  extends AbstractImageMessage
  implements MessageParamsImage {
  /**
   * The channel for this message (always 'mms').
   */
  public channel: Channels.MMS = Channels.MMS;

  /**
   * Time-To-Live (how long a message should exist before it is delivered
   * successfully) in seconds. If a message is not delivered successfully within
   * the TTL time, the message is considered expired and will be rejected if TTL
   * is supported.
   */
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
  constructor(params: Omit<MessageParamsImage, 'channel' | 'messageType'>) {
    super(params);
  }
}
