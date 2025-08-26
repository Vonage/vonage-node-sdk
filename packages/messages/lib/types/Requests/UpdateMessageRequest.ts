import { UpdateMessageStatus } from '../../enums/index.js';

/**
 * The request object for the {@link Messages.update} method.
 */
export type UpdateMessageRequest = {
  /**
   * The status to set for the message.
   *
   * This value depends on the type of message that was sent. The SDK has no way
   * to know which value will be correct for the message. Confirm with the API
   * specification or the API documentation which value is correct for the
   * message {@link https://developer.vonage.com/en/api/messages#UpdateMessage}.
   */
  status: UpdateMessageStatus | string;
}
