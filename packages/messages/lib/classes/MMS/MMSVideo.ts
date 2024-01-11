import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { MessageParamsVideo } from '../../types';

/**
 * Represents a video message for the MMS channel.
 *
 * @group MMS
 */
export class MMSVideo
  extends AbstractVideoMessage
  implements MessageParamsVideo
{
  public channel: 'mms';

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
  constructor(params: MessageParamsVideo) {
    super(params);
    this.channel = 'mms';
  }
}
