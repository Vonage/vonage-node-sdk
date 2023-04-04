import { MessengerCategory } from '../../enums';
import { FileObject } from '../../interfaces/FileObject';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { MessengerType } from '../../types';
import { MessengerFile } from './MessengerFile';
import debug from 'debug';

const log = debug('vonage:messages:messenger');

/**
 * @deprecated please use MessengerFile instead
 */
export class File extends MessengerFile {
  constructor(
    file: FileObject,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
    log('Please update to use the MessengerFile class instead');
    super({
      file: file,
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
