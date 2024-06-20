import { AbstractVcardMessage } from '../AbstractVcardMessage';
import { MessageParamsVcard } from '../../types';

/**
 * Represents a vCard message for the MMS channel.
 *
 * @group MMS
 */
export class MMSVcard
  extends AbstractVcardMessage
  implements MessageParamsVcard
{
  public channel: 'mms';

  /**
   * The amount of time in seconds the message will live for
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
  constructor(params: MessageParamsVcard) {
    super(params);
    this.channel = 'mms';
    this.ttl = params?.ttl;
  }
}
