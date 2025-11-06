import { AbstractMessage } from '../AbstractMessage';
import { RCSCustomParams, RCSSettings } from '../../types/';
import { Channels, MessageTypes } from '../../enums';

/**
 * Represents a custom message for RCS.
 *
 * @group RCS
 */
export class RCSCustom extends AbstractMessage implements RCSCustomParams {
  /**
   * The channel for this message (always 'rcs').
   */
  public channel: Channels.RCS = Channels.RCS;

  /**
   * The type of message (always 'custom').
   */
  public messageType: MessageTypes.CUSTOM = MessageTypes.CUSTOM;

  /**
   * A custom payload. The schema of a custom object can vary widely.
   */
  public custom: Record<string, unknown>;

  /**
   * The duration in seconds the delivery of a message will be attempted. By
   * default Vonage attempts delivery for 72 hours, however the maximum effective
   * value depends on the operator and is typically 24 - 48 hours. We recommend
   * this value should be kept at its default or at least 30 minutes.
   */
  public ttl?: number;

  /**
   * An object of optional settings for the RCS message.
   */
  public rcs?: RCSSettings;

  /**
     * Sends a custom message through RCS
     *
     * @param {RCSCustomParams} params - The parameters for creating a RCS custom message.
     * @example
     * ```ts
     * import { RCSCustom } from '@vonage/messages';
     *
     * const { messageUUID } = await messagesClient.send(new RCSCustom({
     *  to: TO_NUMBER,
     *  from: FROM_NUMBER,
     *  custom: {
     *    foo: 'bar',
     *  }
     *  clientRef: 'my-personal-reference',
     * }));
     *
     * console.log(`Message sent successfully with UUID ${messageUUID}`);
     * ```
     */
  public constructor(params: Omit<RCSCustomParams, 'channel' | 'messageType'>) {
    super(params);
    this.custom = params.custom;
    this.ttl = params.ttl;
    if (params.rcs) {
      this.rcs = params.rcs;
    }
  }
}
