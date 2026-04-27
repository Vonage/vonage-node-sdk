import { AbstractTextMessage } from '../AbstractTextMessage.js';

import { Channels } from '../../enums/index.js';

/**
 * Represents a text message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberText extends
AbstractTextMessage
{
  /**
   * The channel for this message (always 'viber_service').
   */
  channel = Channels.VIBER;

  viberService;

  /**
   * Send a text message using the Viber Service channel.
   *
   * @param {ViberTextParams} params - The parameters for the ViberText message.
   *
   * @example
   * ```ts
   * import { ViberText } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new ViberText({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
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
  constructor(params) {
    super(params);
    this.viberService = params.viberService;
  }
}
