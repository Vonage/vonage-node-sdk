import { AbstractMessage } from './AbstractMessage';
import { MessageVcardType } from '../types';
import { MessageParamsVcard } from '../types';
import { MessageTypes } from '../enums/MessageTypes';

/**
 * An abstract base class for vCard (contact card) message objects.
 */
export abstract class AbstractVcardMessage
  extends AbstractMessage
  implements MessageParamsVcard
{
  /**
   * The type of message (always 'vcard').
   */
  public messageType: MessageTypes.VCARD = MessageTypes.VCARD;

  /**
   * The vCard (contact card) content of the message.
   */
  public vcard: MessageVcardType;

  /**
   * Constructs a new `AbstractVcardMessage` instance for vCard messages.
   *
   * @param {MessageParamsVcard} params - The parameters for creating a vCard message.
   */
  constructor(params: Omit<MessageParamsVcard, 'channel' | 'messageType'>) {
    super(params);
    this.vcard = params.vcard;
  }
}
