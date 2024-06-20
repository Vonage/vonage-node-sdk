import { AbstractImageMessage } from '../AbstractImageMessage';
import { RCSImageParams } from '../../types';
import { Channels } from '../../enums';

/**
 * Represents an image message for the RCS channel.
 *
 * @group RCS
 */
export class RCSImage extends AbstractImageMessage implements RCSImageParams {
  /**
   * The channel through which the message will be sent. Always `rcs`
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
   * Send an RCS image message.
   *
   * @param {RCSImageParams} params - The parameters for creating the image message.
   * @example
   * ```ts
   * import { RCSImage } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new RCSImage({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  image: {
   *    url: 'https://example.com/image.jpg',
   *    caption: 'This is an example image',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params: RCSImageParams) {
    super(params);
    this.ttl = params.ttl;
  }
}
