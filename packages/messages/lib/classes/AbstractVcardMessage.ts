import { AbstractMessage } from './AbstractMessage';
import { MessageVcardType } from '../types';
import { MessageParamsVcard } from '../types';

/**
 * An abstract base class for vCard (contact card) message objects.
 */
export abstract class AbstractVcardMessage
  extends AbstractMessage
  implements MessageParamsVcard
{
  /**
   * The type of message, which is 'vcard' for vCard messages.
   */
  public messageType: 'vcard';

  /**
   * The vCard (contact card) content of the message.
   */
  public vcard: MessageVcardType;

  /**
   * Constructs a new `AbstractVcardMessage` instance for vCard messages.
   *
   * @param {MessageParamsVcard} params - The parameters for creating a vCard message.
   */
  constructor(params: MessageParamsVcard) {
    super(params);
    this.vcard = params.vcard;
    this.messageType = 'vcard';
  }
}
