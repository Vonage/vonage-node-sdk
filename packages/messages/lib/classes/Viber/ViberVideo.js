import { AbstractVideoMessage } from '../AbstractVideoMessage.js';

import { Channels } from '../../enums/index.js';

/**
 * Represents a video message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberVideo extends
AbstractVideoMessage
{
  /**
   * The channel for this message (always 'viber_service').
   */
  channel = Channels.VIBER;
  viberService;

  /**
   * Send a video message using the Viber Service channel.
   *
   * @param {ViberVideoParams} params - The parameters for the ViberVideo message.
   * @example
   * ```ts
   * import { ViberVideo } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new ViberVideo({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
   *  video: {
   *    url: 'https://my-host.com/my-video.mp4',
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
  constructor(params) {
    super(params);
    this.viberService = params.viberService;
  }
}
