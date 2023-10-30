import { AbstractFileMessage } from '../AbstractFileMessage';
import { MessageParamsFile, MessengerFileParams } from '../../types';

/**
 * Represents a file message for the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerFile
  extends AbstractFileMessage
  implements MessageParamsFile
{
  /**
   * The channel for this message (always 'messenger').
   */
  public channel: 'messenger';

  /**
   * The messenger information for this message.
   */
  public messenger;

  /**
   * Constructs a new `MessengerFile` instance.
   *
   * @param {MessengerFileParams} params - The parameters for creating a Messenger file message.
   */
  public constructor(params: MessengerFileParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
