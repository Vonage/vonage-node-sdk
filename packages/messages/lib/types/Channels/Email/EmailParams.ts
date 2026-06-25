import { MessageParams } from '../../MessageParams.js';
import { Channels } from '../../../enums/Channels.js';
import { EmailSettings } from './EmailSettings.js';

/**
 * Represents the base parameters for an Email Message
 *
 * @group Email
 * @category Parameters
 */
export type EmailParams = {
  channel: Channels.EMAIL | string;

  /**
   * An object of settings for the email message.
   */
  email: EmailSettings;

  /**
   * The email address of the message sender. The domain will be need to be
   * verified by Vonage prior to sending emails. See the documentation for more
   * information on setting up and verifying email domains.
   *
   * Display names can also be set in this field, using the following format:
   * "Display Name <your.address@yourdomain.com>".
   */
  from: string;
} & Omit<MessageParams, 'from'>
