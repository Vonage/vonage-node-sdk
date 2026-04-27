import { AbstractVideoMessage } from '../AbstractVideoMessage.js';

import { Channels } from '../../enums/index.js';

/**
 * Represents a video message for the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerVideo extends
AbstractVideoMessage
{
  /**
   * The channel for this message (always 'messenger').
   */
  channel = Channels.MESSENGER;

  /**
   * The messenger information for this message.
   */
  messenger;

  /**
   * Send a video message using the Facebook Messenger channel.
   *
   * @param {MessengerVideoParams} params - The parameters for creating a Messenger video message.
   * @example
   * ```ts
   * import { MessagengerVideo } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MessagengerVideo({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  video: {
   *    url: 'https://example.com/video.mp4',
   *    caption: 'This is a video',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params) {
    super(params);
    this.messenger = params.messenger;
  }
}
