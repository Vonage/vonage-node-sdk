import { AbstractMessage } from './AbstractMessage';
import { MessageImageType } from '../types';
import { MessageParamsImage } from '../types';
import { MessageTypes } from '../enums/MessageTypes';

/**
 * An abstract base class for image messages.
 */
export abstract class AbstractImageMessage
  extends AbstractMessage
  implements MessageParamsImage
{
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
