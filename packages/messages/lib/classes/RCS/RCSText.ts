import { AbstractTextMessage } from '../AbstractTextMessage';
import { AnyRCSSuggestion, RCSTextParams, RCSSettings } from '../../types/';
import { Channels } from '../../enums/';

/**
 * Represents a text message for the RCS channel.
 *
 * @group RCS
 */
export class RCSText extends AbstractTextMessage implements RCSTextParams {
  /**
   * The channel for this message (always 'rcs').
   */
  public channel: Channels.RCS = Channels.RCS;

  /**
   * The duration in seconds the delivery of a message will be attempted. By
   * default Vonage attempts delivery for 72 hours, however the maximum effective
   * value depends on the operator and is typically 24 - 48 hours. We recommend
   * this value should be kept at its default or at least 30 minutes.
   */
  public ttl?: number;

  /**
   * An array of suggestion objects to include with the message. You can
   * include up to 11 suggestions per message.
   */
  public suggestions?: Array<AnyRCSSuggestion>;

  /**
   * An object of optional settings for the RCS message.
   */
  public rcs?: RCSSettings;

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
  public constructor(params: Omit<RCSTextParams, 'channel' | 'messageType'>) {
    super(params);
    this.ttl = params.ttl;
    this.suggestions = params.suggestions;
    if (params.rcs) {
      this.rcs = params.rcs;
    }
  }
}
