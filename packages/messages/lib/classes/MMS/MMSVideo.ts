import { AbstractVideoMessage } from '../AbstractVideoMessage.js';
import { MessageParamsVideo } from '../../types/index.js';
import { Channels } from '../../enums/index.js';

/**
 * Represents a video message for the MMS channel.
 *
 * @group MMS
 */
export class MMSVideo
  extends AbstractVideoMessage
  implements MessageParamsVideo {
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
   * Send an MMS video message.
   *
   * @param {MessageParamsVideo} params - The parameters for creating the video message.
   * @example
   * ```ts
   * import { MMSVideo } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MMSVideo({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  video: {
   *    url: 'https://example.com/video.mp4',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params: Omit<MessageParamsVideo, 'channel' | 'messageType'>) {
    super(params);
  }
}
