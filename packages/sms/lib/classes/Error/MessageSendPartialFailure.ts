import { SMSMessages } from '../../types';
import { SMSFailure } from './SMSFailure';

/**
 * Class representing a partial failure when sending SMS messages.
 *
 * Extends the SMSFailure class and is used to indicate that some SMS messages failed to send.
 */
export class MessageSendPartialFailure extends SMSFailure {
  /**
   * Creates an instance of MessageSendPartialFailure.
   *
   * @param {SMSMessages} response - The response containing details about the partially failed SMS messages.
   */
  constructor(response: SMSMessages) {
    super('Some SMS messages failed to send', response);
  }
}
