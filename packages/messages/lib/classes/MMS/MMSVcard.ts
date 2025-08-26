import { AbstractVcardMessage } from '../AbstractVcardMessage.js';
import { MessageParamsVcard } from '../../types/index.js';
import { Channels } from '../../enums/index.js';

/**
 * Represents a vCard message for the MMS channel.
 *
 * @group MMS
 */
export class MMSVcard
  extends AbstractVcardMessage
  implements MessageParamsVcard {
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
   * Send an MMS vCard message.
   *
   * @param {MessageParamsVcard} params - The parameters for creating the vCard message.
   * @example
   * ```ts
   * import { MMSVcard } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new MMSVcard({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  vcard: {
   *    url: 'https://example.com/vcard.vcf',
   *    caption: 'Download my contact information',
   *  },
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params: Omit<MessageParamsVcard, 'channel' | 'messageType'>) {
    super(params);
  }
}
