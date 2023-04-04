import { MessengerCategory } from '../../enums';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { MessengerType } from '../../types';
import { MessengerText } from './MessengerText';
import debug from 'debug';

const log = debug('vonage:messages:messenger');

/**
 * @deprecated please use MessengerText instead
 */
export class Text extends MessengerText {
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
        category: messenger.category as unknown as MessengerCategory,
        tag: messenger.tag,
      } as MessengerType,
      clientRef: clientRef,
    });
  }
}
