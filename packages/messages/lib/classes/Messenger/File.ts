import { MessengerCategory } from '../../enums';
import { FileObject } from '../../interfaces/FileObject';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { MessengerType } from '../../types';
import { MessengerFile } from './MessengerFile';

export class File extends MessengerFile {
  constructor(
    file: FileObject,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
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
