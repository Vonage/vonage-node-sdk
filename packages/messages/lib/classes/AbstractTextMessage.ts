import { AbstractMessage } from './AbstractMessage';
import { MessageParamsText } from '../types';

/**
 * An abstract base class for text message objects.
 */
export abstract class AbstractTextMessage
  extends AbstractMessage
  implements MessageParamsText
{
  /**
   * The type of message, which is 'text' for text messages.
   */
  public messageType: 'text';

  /**
   * The text content of the message.
   */
  public text: string;

  /**
   * Constructs a new `AbstractTextMessage` instance for text messages.
   *
   * @param {MessageParamsText} params - The parameters for creating a text message.
   */
  constructor(params: MessageParamsText) {
    super(params);
    this.text = params.text;
    this.messageType = 'text';
  }
}
