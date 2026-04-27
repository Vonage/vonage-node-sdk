import { AbstractTextMessage } from '../AbstractTextMessage';

import { Channels } from '../../enums/';

/**
 * Represents a text message for the RCS channel.
 *
 * @group RCS
 */
export class RCSText extends AbstractTextMessage {
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
   * An array of suggestion objects to include with the message. You can
   * include up to 11 suggestions per message.
   */
  suggestions;

  /**
   * An object of optional settings for the RCS message.
   */
  rcs;

  /**
   * Sends a text message through the RCS channel.
   *
   * @param {RCSTextParams} params - The parameters for creating a RCS text message.
   *
   * @example
   * ```ts
   * import { RCSText } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new RCSText({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params) {
    super(params);
    this.ttl = params.ttl;
    this.suggestions = params.suggestions;
    if (params.rcs) {
      this.rcs = params.rcs;
    }
  }
}
