import { AbstractFileMessage } from '../AbstractFileMessage';
import { ViberFileParams } from '../../types';
import { Channels } from '../../enums';

/**
 * Represents a file message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberFile extends AbstractFileMessage implements ViberFileParams {
  /**
   * The channel for this message (always 'viber_service').
   */
  public channel: Channels.VIBER = Channels.VIBER;

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
  constructor(params: Omit<ViberFileParams, 'channel' | 'messageType'>) {
    super(params);
  }
}
