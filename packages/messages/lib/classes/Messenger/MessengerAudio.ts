import { AbstractAudioMessage } from '../AbstractAudioMessage';
import { MessengerAudioParams, MessengerType } from '../../types';

/**
 * Represents an audio message for the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerAudio
  extends AbstractAudioMessage
  implements MessengerAudioParams
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
   * Constructs a new `MessengerAudio` instance.
   *
   * @param {MessengerAudioParams} params - The parameters for creating a Messenger audio message.
   */
  public constructor(params: MessengerAudioParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
