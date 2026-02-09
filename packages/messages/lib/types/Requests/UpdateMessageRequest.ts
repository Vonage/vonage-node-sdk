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

  typing_indicator?: {
    /**
     * Whether to show the replying indicator to the WhatsApp user.
     */
    show: boolean,

    /**
     * The type of indicator to the WhatsApp user. The replying indicator will
     * be dismissed once you respond, or after 25 seconds, whichever comes
     * first. To prevent a poor user experience, only display a replying
     * indicator if you are going to respond.
     */
    type: 'text'
  }
}
