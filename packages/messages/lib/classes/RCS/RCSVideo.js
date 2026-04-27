import { AbstractVideoMessage } from '../AbstractVideoMessage';

import { Channels } from '../../enums/';

/**
 * Represents an video message for the RCS channel.
 *
 * @group RCS
 */
export class RCSVideo extends AbstractVideoMessage {
  /**
   * The channel for this message (always 'rcs').
   */
  channel = Channels.RCS;

  /**
   * The duration in seconds the delivery of a message will be attempted. By
   * default Vonage attempts delivery for 72 hours, however the maximum effective
   * value depends on the operator and is typically 24 - 48 hours. We recommend
   * this value should be kept at its default or at least 30 minutes.
   */
  ttl;

  /**
   * An object of optional settings for the RCS message.
   */
  rcs;

  /**
   * Send an RCS video message.
   *
   * @param {RCSVideoParams} params - The parameters for creating the video message.
   *
   * @example
   * ```ts
   * import { RCSVideo } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new RCSVideo({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  audio: {
   *    url: 'https://example.com/video.mp4',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params) {
    super(params);
    this.ttl = params?.ttl;
    if (params.rcs) {
      this.rcs = params.rcs;
    }
  }
}
