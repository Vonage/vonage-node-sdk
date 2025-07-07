import { AbstractMessage } from './AbstractMessage';
import { MessageVideoType } from '../types';
import { MessageParamsVideo } from '../types';
import { MessageTypes } from '../enums/MessageTypes';

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
  public messageType: MessageTypes.VIDEO = MessageTypes.VIDEO;

  /**
   * The video content of the message.
   */
  public video: MessageVideoType;

  /**
   * Constructs a new `AbstractVideoMessage` instance for video messages.
   *
   * @param {MessageParamsVideo} params - The parameters for creating a video message.
   */
  constructor(params: Omit<MessageParamsVideo, 'channel' | 'messageType'>) {
    super(params);
    this.video = params.video;
  }
}
