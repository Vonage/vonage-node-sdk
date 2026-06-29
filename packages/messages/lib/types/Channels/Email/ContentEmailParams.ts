import { EmailContentTypes } from '../../../enums/index.js';
import { EmailParams } from './EmailParams.js';

export type TextContentEmailParams = {
  /**
   * The type for the content object. Must be text.
   */
  type: EmailContentTypes.TEXT;

  /**
   * The text content to display in the message.
   */
  text: string;
}

export type HTMLContentEmailParams = {
  /**
   * The type for the content object. Must be html.
   */
  type: EmailContentTypes.HTML;

  /**
   * The HTML content to display in the message.
   */
  body: string;
}

/**
 * Represents the parameters for a HTML Email Message
 *
 * @group Email
 * @category Parameters
 */
export type ContentEmailParams = {
  /**
   * The content and structure of the HTML email message.
   */
  content: Array<TextContentEmailParams | HTMLContentEmailParams>;
} & EmailParams
