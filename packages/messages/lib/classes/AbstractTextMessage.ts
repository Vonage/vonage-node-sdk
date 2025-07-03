import { AbstractMessage } from './AbstractMessage';
import { MessageParamsText } from '../types';
import { MessageTypes } from '../enums/MessageTypes';

/**
 * An abstract base class for text message objects.
 */
export abstract class AbstractTextMessage
  extends AbstractMessage
  implements MessageParamsText
{
  /**
   * The type of message (always 'text').
   */
  public messageType: MessageTypes.TEXT = MessageTypes.TEXT;

  /**
   * The text content of the message.
   */
  public text: string;

  /**
   * Constructs a new `AbstractTextMessage` instance for text messages.
   *
   * @param {MessageParamsText} params - The parameters for creating a text message.
   */
  constructor(params: Omit<MessageParamsText, 'channel' | 'messageType'>) {
    super(params);
    this.text = params.text;
  }
}
