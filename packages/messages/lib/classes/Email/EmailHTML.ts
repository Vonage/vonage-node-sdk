import { MessageTypes } from '../../enums/index.js';
import { AbstractEmailMessage } from './AbstractEmailMessage.js';
import { HTMLEmailParams, HTMLEmail } from '../../types/Channels/Email/index.js';

/**
 * Represents an audio message for the MMS channel.
 *
 * @group Email
 */
export class EmailHTML
  extends AbstractEmailMessage
  implements HTMLEmailParams {

  public messageType: MessageTypes.HTML = MessageTypes.HTML;

  /**
   * The content and structure of html email.
   */
  public html: HTMLEmail;

  /**
   */
  public constructor(params: Omit<HTMLEmailParams, 'channel' | 'messageType'>) {
    super(params);
    this.html = params.html;
  }
}
