import { AbstractImageMessage } from '../AbstractImageMessage';
import { ViberImageParams } from '../../types';
import { ViberActionParams } from '../../types';

/**
 * Represents an image message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberImage
  extends AbstractImageMessage
  implements ViberImageParams
{
  public channel: 'viber_service';
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
  constructor(params: ViberImageParams) {
    super(params);
    this.viberService = params.viberService;
    this.channel = 'viber_service';
  }
}
