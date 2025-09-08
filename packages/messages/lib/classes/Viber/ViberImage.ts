import { AbstractImageMessage } from '../AbstractImageMessage.js';
import { ViberImageParams } from '../../types/index.js';
import { ViberActionParams } from '../../types/index.js';
import { Channels } from '../../enums/index.js';

/**
 * Represents an image message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberImage
  extends AbstractImageMessage
  implements ViberImageParams {
  /**
   * The channel for this message (always 'viber_service').
   */
  public channel: Channels.VIBER = Channels.VIBER;

  public viberService: ViberActionParams;

  /**
   * Send an image message using the Viber Service channel.
   *
   * @param {ViberImageParams} params - The parameters for the ViberImage message.
   * @example
   * ```ts
   * import { ViberImage } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new ViberImage({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  image: {
   *  url: 'https://my-host.com/my-image.jpg',
   *  },
   *  viberService: {
   *    action: {
   *      url: 'https://my-host.com/my-path',
   *      text: 'My button text',
   *    },
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params: Omit<ViberImageParams, 'channel' | 'messageType'>) {
    super(params);
    this.viberService = params.viberService;
  }
}
