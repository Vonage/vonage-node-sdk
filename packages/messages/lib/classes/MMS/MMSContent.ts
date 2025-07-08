import { AbstractMessage } from '../AbstractMessage';
import { MessageParamsContent, MessageContentObject } from '../../types';
import { Channels } from '../../enums';
import { MessageTypes } from '../../enums/MessageTypes';

/**
 * Represents a custom message for the MMS channel.
 *
 * @group MMS
 */
export class MMSContent
  extends AbstractMessage
{
  /**
   * The channel for this message (always 'mms').
   */
  public channel: Channels.MMS = Channels.MMS;

  /**
   * The type of message (always 'content').
   */
  public messageType: MessageTypes.CONTENT = MessageTypes.CONTENT;

  /**
   * Time-To-Live (how long a message should exist before it is delivered
   * successfully) in seconds. If a message is not delivered successfully within
   * the TTL time, the message is considered expired and will be rejected if TTL
   * is supported.
   */
  public ttl?: number;

  public content: Array<MessageContentObject>;


  /**
   * Send an MMS custom message.
   *
   * @param {MessageParamsContent} params - The parameters for creating the custom message.
   * @example
   * ```ts
   * import { MMSContent } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MMSContent({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  custom: [
   *    {
   *      type: 'image',
   *      url: 'https://example.com/image.jpg',
   *      caption: 'My cool image',
   *    }
   *  ],
   * });
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params: Omit<MessageParamsContent, 'channel' | 'messageType'>) {
    super(params);

    this.content = params.content;
  }
}
