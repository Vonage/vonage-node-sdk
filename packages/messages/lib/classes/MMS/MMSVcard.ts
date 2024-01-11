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
   *    name: 'John Doe',
   *    phoneNumber: '15555555555',
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
  }
}
