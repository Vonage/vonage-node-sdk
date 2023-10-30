import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { MessengerType, MessengerVideoParams } from '../../types';

/**
 * Represents a video message for the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerVideo
  extends AbstractVideoMessage
  implements MessengerVideoParams
{
  /**
   * The channel for this message (always 'messenger').
   */
  public channel: 'messenger';

  /**
   * The messenger information for this message.
   */
  public messenger: MessengerType;

  /**
   * Constructs a new `MessengerVideo` instance.
   *
   * @param {MessengerVideoParams} params - The parameters for creating a Messenger video message.
   */
  public constructor(params: MessengerVideoParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
