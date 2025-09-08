import { SMSStatus } from '../../enums/index.js';

/**
 * Interface representing an SMS error message response.
 *
 * Describes the structure of a response containing an SMS status and error text.
 */
export type SMSErrorMessageResponse = {
  /**
   * The SMS status code indicating the error.
   */
  status: SMSStatus;

  /**
   * The error text providing details about the error.
   */
  'error-text': string;
}
