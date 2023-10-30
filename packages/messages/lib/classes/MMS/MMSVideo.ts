import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { MessageParamsVideo } from '../../types';

/**
 * Represents a video message for the MMS channel.
 *
 * @group MMS
 */
export class MMSVideo
  extends AbstractVideoMessage
  implements MessageParamsVideo
{
  public channel: 'mms';

  /**
   * Constructs a new `MMSVideo` instance for the MMS channel.
   *
   * @param {MessageParamsVideo} params - The parameters for creating the video message.
   */
  constructor(params: MessageParamsVideo) {
    super(params);
    this.channel = 'mms';
  }
}
