import { AbstractMessage } from './AbstractMessage.js';

import { MessageTypes } from '../enums/index.js';

/**
 * An abstract base class for vCard (contact card) message objects.
 */
export class AbstractVcardMessage extends
AbstractMessage
{
  /**
   * The type of message (always 'vcard').
   */
  messageType = MessageTypes.VCARD;

  /**
   * The vCard (contact card) content of the message.
   */
  vcard;

  /**
   * Constructs a new `AbstractVcardMessage` instance for vCard messages.
   *
   * @param {MessageParamsVcard} params - The parameters for creating a vCard message.
   */
  constructor(params) {
    super(params);
    this.vcard = params.vcard;
  }
}
