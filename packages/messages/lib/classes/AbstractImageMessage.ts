import { AbstractMessage } from './AbstractMessage';
import { MessageImageType } from '../types';
import { MessageParamsImage } from '../types';

/**
 * An abstract base class for image messages.
 */
export abstract class AbstractImageMessage
  extends AbstractMessage
  implements MessageParamsImage
{
  public messageType: 'image';
  public image: MessageImageType;

  /**
   * Constructs a new `AbstractImageMessage` instance.
   *
   * @param {MessageParamsImage} params - The parameters for creating an image message.
   */
  constructor(params: MessageParamsImage) {
    super(params);
    this.image = params.image;
    this.messageType = 'image';
  }
}
