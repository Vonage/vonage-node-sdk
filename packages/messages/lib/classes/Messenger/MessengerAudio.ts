import { AbstractAudioMessage } from '../AbstractAudioMessage';
import { MessengerAudioParams, MessengerType } from '../../types';
import { Channels } from '../../enums';

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
  public channel: Channels.MESSENGER = Channels.MESSENGER;

  /**
   * The messenger information for this message.
   */
  public messenger: MessengerType;

  /**
   * Sends an audio message to the Facebook Messenger channel.
   *
   * @param {MessengerAudioParams} params - The parameters for creating a Messenger audio message.
   * @example
   * ```ts
   * import { MessengerAudio } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MessengerAudio({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  audio: {
   *    url: 'https://example.com/audio.mp3',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  public constructor(params: Omit<MessengerAudioParams, 'channel' | 'messageType'>) {
    super(params);
    this.messenger = params.messenger;
  }
}
