import { AbstractMessage } from './AbstractMessage.js';

import { MessageTypes } from '../enums/index.js';

/**
 * An abstract base class for text message objects.
 */
export class AbstractTextMessage extends
AbstractMessage
{
  /**
   * The type of message (always 'text').
   */
  messageType = MessageTypes.TEXT;

  /**
   * The text content of the message.
   */
  text;

  /**
   * Constructs a new `AbstractTextMessage` instance for text messages.
   *
   * @param {MessageParamsText} params - The parameters for creating a text message.
   */
  constructor(params) {
    super(params);
    this.text = params.text;
  }
}
