import { MessageType } from '../../interfaces/Messenger/MessageType';
import { MessengerType } from '../../types';
import { MessengerText } from './MessengerText';
import debug from 'debug';

const log = debug('vonage:messages:messenger');

/**
 * Represents a text message for the Messenger channel.
 *
 * @deprecated Please use the MessengerText Class instead.
 *
 * @group Messenger
 */
export class Text extends MessengerText {
  /**
   * Constructs a new `Text` instance.
   *
   * @param {string} text - The text content of the message.
   * @param {string} to - The recipient of the message.
   * @param {string} from - The sender of the message.
   * @param {MessageType} messenger - The messenger information for the message.
   * @param {string} clientRef - The client reference for the message.
   */
  constructor(
    text: string,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
    log('Please update to use the MessengerText class instead');
    super({
      text: text,
      to: to,
      from: from,
      messenger: {
        category: messenger?.category,
        tag: messenger?.tag,
      } as MessengerType,
      clientRef: clientRef,
    });
  }
}
