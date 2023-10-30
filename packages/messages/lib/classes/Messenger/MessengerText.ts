import { AbstractTextMessage } from '../AbstractTextMessage';
import { MessengerTextParams, MessengerType } from '../../types';

/**
 * Represents a text message for the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerText
  extends AbstractTextMessage
  implements MessengerTextParams
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
   * Constructs a new `MessengerText` instance.
   *
   * @param {MessengerTextParams} params - The parameters for creating a Messenger text message.
   */
  public constructor(params: MessengerTextParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
