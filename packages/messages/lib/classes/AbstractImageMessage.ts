import { AbstractMessage } from './AbstractMessage.js';
import { MessageImageType, MessageParamsImage } from '../types/index.js';
import { MessageTypes } from '../enums/MessageTypes.js';

/**
 * An abstract base class for image messages.
 */
export abstract class AbstractImageMessage
  extends AbstractMessage
  implements MessageParamsImage {
  /**
   * The type of message (always 'image').
   */
  public messageType: MessageTypes.IMAGE = MessageTypes.IMAGE;

  public image: MessageImageType;

  /**
   * Constructs a new `AbstractImageMessage` instance.
   *
   * @param {MessageParamsImage} params - The parameters for creating an image message.
   */
  constructor(params: Omit<MessageParamsImage, 'channel' | 'messageType'>) {
    super(params);
    this.image = params.image;
  }
}
