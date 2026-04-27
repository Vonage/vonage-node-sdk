import { SMSStatus } from '../../enums/index.js';

/* istanbul ignore next */
/**
 * Class representing a failure response when sending SMS messages.
 *
 * Extends the built-in Error class and provides methods for accessing and handling failed SMS messages.
 */
export class SMSFailure extends Error {
  /**
   * The response containing details about the SMS messages.
   */
  response;

  /**
   * Creates an instance of SMSFailure.
   *
   * @param {string} message - The error message.
   * @param {SMSMessages} response - The response containing details about the SMS messages.
   */
  constructor(message, response) {
    super(message);
    this.response = response;
  }

  /**
   * Retrieves an array of all messages in the response.
   *
   * @return {Array<ErrorMessage | Message>} An array of all messages in the response.
   */
  getMessages() {
    return this.response.messages || [];
  }

  /**
   * Retrieves an array of failed messages in the response.
   *
   * @return {Array<ErrorMessage>} An array of failed messages in the response.
   */
  getFailedMessages() {
    return this.getMessages().filter(
      ({ status }) => status !== SMSStatus.SUCCESS
    );
  }

  /**
   * Retrieves the original response containing details about the SMS messages.
   *
   * @return {SMSMessages} The original response containing details about the SMS messages.
   */
  getResponse() {
    return this.response;
  }

  /**
   * Retrieves an array of successfully sent messages in the response.
   *
   * @return {Array<Message>} An array of successfully sent messages in the response.
   */
  getSuccessfulMessages() {
    return this.getMessages().filter(
      ({ status }) => status === SMSStatus.SUCCESS
    );
  }
}
