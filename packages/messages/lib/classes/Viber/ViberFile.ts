import { AbstractFileMessage } from '../AbstractFileMessage';
import { ViberFileParams } from '../../types';

/**
 * Represents a file message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberFile extends AbstractFileMessage implements ViberFileParams {
  public channel: 'viber_service';

  /**
   * Send a file message using the Viber Service channel.
   *
   * @param {ViberFileParams} params - The parameters for the ViberFile message.
   * @example
   * ```ts
   * import { ViberFile } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new ViberFile({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  file: {
   *    url: 'https://my-host.com/my-file.pdf',
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
  constructor(params: ViberFileParams) {
    super(params);
    this.channel = 'viber_service';
  }
}
