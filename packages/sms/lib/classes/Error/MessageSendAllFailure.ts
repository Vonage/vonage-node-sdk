import { SMSMessages } from '../../types';
import { SMSFailure } from './SMSFailure';

/**
 * Class representing a failure when sending all SMS messages.
 *
 * Extends the SMSFailure class and is used to indicate that all SMS messages failed to send.
 */
export class MessageSendAllFailure extends SMSFailure {
  /**
   * Creates an instance of MessageSendAllFailure.
   *
   * @param {SMSMessages} response - The response containing details about the failed SMS messages.
   */
  constructor(response: SMSMessages) {
    super('All SMS messages failed to send', response);
  }
}
