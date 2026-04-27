import { AbstractMessage } from './AbstractMessage.js';

import { MessageTypes } from '../enums/MessageTypes.js';

/**
 * An abstract base class for image messages.
 */
export class AbstractImageMessage extends
AbstractMessage
{
  /**
   * The type of message (always 'image').
   */
  messageType = MessageTypes.IMAGE;

  image;

  /**
   * Constructs a new `AbstractImageMessage` instance.
   *
   * @param {MessageParamsImage} params - The parameters for creating an image message.
   */
  constructor(params) {
    super(params);
    this.image = params.image;
  }
}
