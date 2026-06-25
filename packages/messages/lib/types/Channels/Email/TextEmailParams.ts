import { EmailParams } from './EmailParams.js';

/**
 * Represents the base parameters for an Email Message
 *
 * @group Email
 * @category Parameters
 */
export type TextEmailParams = {
  /**
    * The text of the message
    */
  text: string,
} & EmailParams;
