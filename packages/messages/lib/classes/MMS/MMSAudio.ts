import { AbstractAudioMessage } from '../AbstractAudioMessage.js';
import { MessageParamsAudio } from '../../types/index.js';
import { Channels } from '../../enums/index.js';

/**
 * Represents an audio message for the MMS channel.
 *
 * @group MMS
 */
export class MMSAudio
  extends AbstractAudioMessage
  implements MessageParamsAudio {
  /**
   * The channel for this message (always 'mms').
   */
  public channel: Channels.MMS = Channels.MMS;

  /**
   * Time-To-Live (how long a message should exist before it is delivered
   * successfully) in seconds. If a message is not delivered successfully within
   * the TTL time, the message is considered expired and will be rejected if TTL
   * is supported.
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
  public constructor(params: Omit<MessageParamsAudio, 'channel' | 'messageType'>) {
    super(params);
  }
}
