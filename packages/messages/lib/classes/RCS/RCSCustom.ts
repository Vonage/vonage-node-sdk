import { AbstractMessage } from '../AbstractMessage';
import { RCSCustomParams } from '../../types';
import { Channels } from '../../enums';

/**
 * Represents a custom message for RCS.
 *
 * @group RCS
 */
export class RCSCustom extends AbstractMessage implements RCSCustomParams {
  /**
   * The channel through which the message will be sent. Always `rcs`
   */
  public channel: Channels.RCS = Channels.RCS;

  /**
   * The type of message. For a custom message, this will always be `custom`.
   */
  public messageType = 'custom';

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
  public constructor(params: RCSCustomParams) {
    super(params);
    this.custom = params.custom;
    this.ttl = params.ttl;
  }
}
