import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessageParamsImage } from '../../types';

/**
 * Represents an image message for the MMS channel.
 *
 * @group MMS
 */
export class MMSImage
  extends AbstractImageMessage
  implements MessageParamsImage
{
  public channel: 'mms';

  /**
   * Constructs a new `MMSImage` instance for the MMS channel.
   *
   * @param {MessageParamsImage} params - The parameters for creating the image message.
   */
  constructor(params: MessageParamsImage) {
    super(params);
    this.channel = 'mms';
  }
}
