import { MessageTypes } from '../../enums/index.js';
import { AbstractEmailMessage } from './AbstractEmailMessage.js';
import {
  ContentEmailParams,
  HTMLContentEmailParams,
  TextContentEmailParams,
} from '../../types/Channels/Email/index.js';

/**
 * Represents an audio message for the MMS channel.
 *
 * @group Email
 */
export class EmailContent
  extends AbstractEmailMessage
  implements ContentEmailParams {

  public messageType: MessageTypes.CONTENT = MessageTypes.CONTENT;

  /**
   * The content and structure of html email.
   */
  public content: Array<TextContentEmailParams | HTMLContentEmailParams>;

  /**
   */
  public constructor(params: Omit<ContentEmailParams, 'channel' | 'messageType'>) {
    super(params);
    this.content = params.content;
  }
}
