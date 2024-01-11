import { AbstractMessage } from './AbstractMessage';
import { MessageVideoType } from '../types';
import { MessageParamsVideo } from '../types';

/**
 * An abstract base class for video message objects.
 */
export abstract class AbstractVideoMessage
  extends AbstractMessage
  implements MessageParamsVideo
{
  /**
   * The type of message, which is 'video' for video messages.
   */
  public messageType: 'video';

  /**
   * The video content of the message.
   */
  public video: MessageVideoType;

  /**
   * Constructs a new `AbstractVideoMessage` instance for video messages.
   *
   * @param {MessageParamsVideo} params - The parameters for creating a video message.
   */
  constructor(params: MessageParamsVideo) {
    super(params);
    this.video = params.video;
    this.messageType = 'video';
  }
}
