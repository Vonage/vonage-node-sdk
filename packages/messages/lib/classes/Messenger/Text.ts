import { MessengerCategory } from '../../enums';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { MessengerType } from '../../types';
import { AbstractTextMessageObject } from '../AbstractTextMessage';
import { MessengerText } from './MessengerText';

export class Text extends MessengerText {
  constructor(
    text: string,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
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
