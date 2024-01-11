import { SMSStatus } from '../../enums';
import { SMSMessages, ErrorMessage, Message } from '../../types';

/**
 * Class representing a failure response when sending SMS messages.
 *
 * Extends the built-in Error class and provides methods for accessing and handling failed SMS messages.
 */
export class SMSFailure extends Error {
  /**
   * The response containing details about the SMS messages.
   */
  protected response: SMSMessages;

  /**
   * Creates an instance of SMSFailure.
   *
   * @param {string} message - The error message.
   * @param {SMSMessages} response - The response containing details about the SMS messages.
   */
  constructor(message: string, response: SMSMessages) {
    super(message);
    this.response = response;
  }

  /**
   * Retrieves an array of all messages in the response.
   *
   * @return {Array<ErrorMessage | Message>} An array of all messages in the response.
   */
  public getMessages(): Array<ErrorMessage & Message> {
    return (this.response.messages as Array<ErrorMessage & Message>) || [];
  }

  /**
   * Retrieves an array of failed messages in the response.
   *
   * @return {Array<ErrorMessage>} An array of failed messages in the response.
   */
  public getFailedMessages(): Array<ErrorMessage> {
    return this.getMessages().filter(
      ({ status }: ErrorMessage) => status !== SMSStatus.SUCCESS,
    );
  }

  /**
   * Retrieves the original response containing details about the SMS messages.
   *
   * @return {SMSMessages} The original response containing details about the SMS messages.
   */
  public getResponse(): SMSMessages {
    return this.response;
  }

  /**
   * Retrieves an array of successfully sent messages in the response.
   *
   * @return {Array<Message>} An array of successfully sent messages in the response.
   */
  public getSuccessfulMessages(): Array<Message> {
    return this.getMessages().filter(
      ({ status }: Message) => status === SMSStatus.SUCCESS,
    );
  }
}
