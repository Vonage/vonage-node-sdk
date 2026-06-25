import { EmailParams } from './EmailParams.js';

export type HTMLEmail = {
  /**
   * The HTML content of the email message.
   */
  body: string
};

/**
 * Represents the parameters for a HTML Email Message
 *
 * @group Email
 * @category Parameters
 */
export type HTMLEmailParams = {
  /**
   * The content and structure of the HTML email message.
   */
  html: HTMLEmail;

} & EmailParams
