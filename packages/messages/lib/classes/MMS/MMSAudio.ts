import { AbstractAudioMessage } from '../AbstractAudioMessage';
import { MessageParamsAudio } from '../../types';

/**
 * Represents an audio message for the MMS channel.
 *
 * @group MMS
 */
export class MMSAudio
  extends AbstractAudioMessage
  implements MessageParamsAudio
{
  public channel: 'mms';

  /**
   * The amount of time in seconds the message will live for
   */
  public ttl?: number;

  /**
   * Send an MMS audio message.
   *
   * @param {MessageParamsAudio} params - The parameters for creating the audio message.
   *
   * @example
   * ```ts
   * import { MMSAudio } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MMSAudio({
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
  public constructor(params: MessageParamsAudio) {
    super(params);
    this.channel = 'mms';
    this.ttl = params?.ttl;
  }
}
