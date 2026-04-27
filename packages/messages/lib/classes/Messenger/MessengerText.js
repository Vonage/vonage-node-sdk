import { AbstractTextMessage } from '../AbstractTextMessage.js';

import { Channels } from '../../enums/index.js';

/**
 * Represents a text message for the Messenger channel.
 *
 * @group Messenger
 */
export class MessengerText extends
AbstractTextMessage
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
   * Sends a text message to the Facebook Messenger channel.
   *
   * @param {MessengerTextParams} params - The parameters for creating a Messenger text message.
   *
   * @example
   * ```ts
   * import { MessengerText } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MessengerText({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'Hello world',
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
