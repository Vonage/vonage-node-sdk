import { MessageTypes } from '../../enums/index.js';
import { AbstractEmailMessage } from './AbstractEmailMessage.js';
import { TextEmailParams } from '../../types/Channels/Email/index.js';

/**
 * Represents an audio message for the MMS channel.
 *
 * @group Email
 */
export class EmailText
  extends AbstractEmailMessage
  implements TextEmailParams {

  public messageType: MessageTypes.TEXT = MessageTypes.TEXT;

  /**
   * The text of message to send.
   */
  public text: string;

  /**
   */
  public constructor(params: Omit<TextEmailParams, 'channel' | 'messageType'>) {
    super(params);
    this.text = params.text;
  }
}
