import { AbstractFileMessage } from '../AbstractFileMessage';
import { MessageParamsFile } from '../../types';
import { Channels } from '../../enums';

/**
 * Represents a file message for the MMS channel.
 *
 * @group MMS
 */
export class MMSFile
  extends AbstractFileMessage
  implements MessageParamsFile
{
  /**
   * The channel for this message (always 'mms').
   */
  public channel: Channels.MMS = Channels.MMS;

  /**
   * Time-To-Live (how long a message should exist before it is delivered
   * successfully) in seconds. If a message is not delivered successfully within
   * the TTL time, the message is considered expired and will be rejected if TTL
   * is supported.
   */
  public ttl?: number;

  /**
   * Send an MMS file message.
   *
   * @param {MessageParamsFile} params - The parameters for creating the file message.
   * @example
   * ```ts
   * import { MMSFile } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MMSFile({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  file: {
   *    url: 'https://example.com/file.mp4',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params: Omit<MessageParamsFile, 'channel' | 'messageType'>) {
    super(params);
  }
}
