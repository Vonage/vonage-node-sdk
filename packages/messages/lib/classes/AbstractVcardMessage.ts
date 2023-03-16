import { AbstractMessage } from './AbstractMessage';
import { MessageVCardInterface } from '../interfaces';
import { MessageVcardType } from '../types';
import { MessageParamsVcard } from '../types';

export abstract class AbstractVcardMessage
  extends AbstractMessage
  implements MessageVCardInterface
{
  public vcard: MessageVcardType;
  public messageType: 'vcard';

  constructor(params: MessageParamsVcard) {
    super(params);
    this.vcard = params.vcard;
    this.messageType = 'vcard';
  }
}
