import { AbstractTextMessage } from '../AbstractTextMessage.js';

import { Channels } from '../../enums/index.js';

/**
 * Represents a text message for the MMS channel.
 *
 * @group MMS
 */
export class MMSText extends
AbstractTextMessage
{
  /**
   * The channel for this message (always 'mms').
   */
  channel = Channels.MMS;

  /**
   * Time-To-Live (how long a message should exist before it is delivered
   * successfully) in seconds. If a message is not delivered successfully within
   * the TTL time, the message is considered expired and will be rejected if TTL
   * is supported.
   */
  ttl;

  /**
   * Send an MMS text message.
   *
   * @param {MessageParamsText} params - The parameters for creating the text message.
   * @example
   * ```ts
   * import { MMSText } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MMSText({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  text: 'my message',
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params) {
    super(params);
  }
}
