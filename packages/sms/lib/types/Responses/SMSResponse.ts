import { SMSErrorMessageResponse } from './SMSErrorMessageResponse.js';
import { SMSMessageResponse } from './SMSMessageResponse.js';

/**
 * Interface representing an SMS response.
 *
 * Describes the structure of a response containing information about SMS messages or error messages.
 */
export type SMSResponse = {
  /**
   * The count of messages included in the response.
   */
  'message-count': number;

  /**
   * An array of SMS message responses or SMS error message responses.
   */
  messages: (SMSMessageResponse[] | SMSErrorMessageResponse[]);
}
