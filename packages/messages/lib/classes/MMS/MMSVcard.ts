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
   * Constructs a new `MMSVcard` instance for the MMS channel.
   *
   * @param {MessageParamsVcard} params - The parameters for creating the vCard message.
   */
  constructor(params: MessageParamsVcard) {
    super(params);
    this.channel = 'mms';
  }
}
