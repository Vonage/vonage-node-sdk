import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessengerImageParams } from '../../types';

/**
 * Represents an image message for the Messenger channel.
 *
 * This class extends the `AbstractImageMessage` class and implements the `MessengerImageParams` interface.
 * It is used for sending image messages on the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerImage
  extends AbstractImageMessage
  implements MessengerImageParams
{
  /**
   * The channel for sending the message, which is set to 'messenger'.
   */
  public channel: 'messenger';

  /**
   * Additional Messenger-specific parameters for the image message.
   */
  public messenger;

  /**
   * Constructs a new `MessengerImage` instance for the Messenger channel.
   *
   * @param {MessengerImageParams} params - The parameters for the image message.
   */
  public constructor(params: MessengerImageParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
