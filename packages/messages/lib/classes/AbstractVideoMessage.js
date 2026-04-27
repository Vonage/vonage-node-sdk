import { AbstractMessage } from './AbstractMessage.js';

import { MessageTypes } from '../enums/MessageTypes.js';

/**
 * An abstract base class for video message objects.
 */
export class AbstractVideoMessage extends
AbstractMessage
{
  /**
   * The type of message, which is 'video' for video messages.
   */
  messageType = MessageTypes.VIDEO;

  /**
   * The video content of the message.
   */
  video;

  /**
   * Constructs a new `AbstractVideoMessage` instance for video messages.
   *
   * @param {MessageParamsVideo} params - The parameters for creating a video message.
   */
  constructor(params) {
    super(params);
    this.video = params.video;
  }
}
