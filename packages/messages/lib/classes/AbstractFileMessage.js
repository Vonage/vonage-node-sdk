import { AbstractMessage } from './AbstractMessage.js';

import { MessageTypes } from '../enums/MessageTypes.js';

/**
 * An abstract base class for file messages.
 */
export class AbstractFileMessage extends
AbstractMessage
{
  /**
   * The type of message (always 'file').
   */
  messageType = MessageTypes.FILE;

  file;

  /**
   * Constructs a new `AbstractFileMessage` instance.
   *
   * @param {MessageParamsFile} params - The parameters for creating a file message.
   */
  constructor(params) {
    super(params);
    this.file = params.file;
  }
}
