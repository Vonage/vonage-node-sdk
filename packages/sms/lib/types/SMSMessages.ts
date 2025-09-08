import { ErrorMessage } from './ErrorMessage.js';
import { Message } from './Message.js';
import { SMSResponse } from './Responses/index.js';

/**
 * Interface representing an SMS response containing multiple messages, including errors.
 *
 * Extends the structure of an SMS response and includes additional properties for message count
 * and an array of messages, which can include both valid messages and error messages.
 *
 * @extends {SMSResponse}
 */
export type SMSMessages = SMSResponse & {
  /**
   * The count of messages included in the response.
   */
  messageCount: number;

  /**
   * An array of messages, which can include both valid messages and error messages.
   */
  messages: Array<Message & ErrorMessage>;
}
