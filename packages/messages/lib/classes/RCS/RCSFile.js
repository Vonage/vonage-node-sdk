import { AbstractFileMessage } from '../AbstractFileMessage';

import { Channels } from '../../enums/';

/**
 * Represents a file message for the RCS channel.
 *
 * @group RCS
 */
export class RCSFile extends
AbstractFileMessage
{
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
   * Sends a file message to the RCS channel.
   *
   * @param {RCSFileParams} params - The parameters for creating a RCS file message.
   *
   * @example
   * ```ts
   * import { RCSFile } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new RCSFile({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  file: {
   *    url: 'https://example.com/image.pdf',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params) {
    super(params);
    this.ttl = params.ttl;
    if (params.rcs) {
      this.rcs = params.rcs;
    }
  }
}
