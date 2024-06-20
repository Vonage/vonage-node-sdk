import { AbstractVideoMessage } from '../';
import { RCSVideoParams } from '../../types';
import { Channels } from '../../enums';

/**
 * Represents an audio message for the RCS channel.
 *
 * @group RCS
 */
export class RCSVideo extends AbstractVideoMessage implements RCSVideoParams {
  /**
   * The channel through which the message will be sent. Always `rcs`
   */
  public channel: Channels.RCS;

  /**
   * The duration in seconds the delivery of a message will be attempted. By
   * default Vonage attempts delivery for 72 hours, however the maximum effective
   * value depends on the operator and is typically 24 - 48 hours. We recommend
   * this value should be kept at its default or at least 30 minutes.
   */
  public ttl?: number;

  /**
   * Send an RCS video message.
   *
   * @param {RcsAudioMessageParams} params - The parameters for creating the audio message.
   *
   * @example
   * ```ts
   * import { RcsAudio } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new RcsAudio({
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
  public constructor(params: RCSVideoParams) {
    super(params);
    this.channel = Channels.RCS;
    this.ttl = params?.ttl;
  }
}
