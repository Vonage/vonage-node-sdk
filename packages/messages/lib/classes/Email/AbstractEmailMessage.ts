import { Channels } from '../../enums/index.js';
import { AbstractMessage } from '../AbstractMessage.js';
import { EmailSettings, EmailParams } from '../../types/Channels/Email/index.js';

/**
 * Shared class for all Email Messages
 *
 * @group Email
 */
export abstract class AbstractEmailMessage
  extends AbstractMessage
  implements EmailParams {
  /**
   * The channel for this message (always 'email').
   */
  public channel: Channels.EMAIL = Channels.EMAIL;

  /**
   * An object of settings for the email message.
   */
  public email: EmailSettings;

  /**
   */
  public constructor(params: Omit<EmailParams, 'channel' | 'messageType'>) {
    super(params);
    this.email = params.email;
  }
}
