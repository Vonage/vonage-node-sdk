import { FileObject } from '../../interfaces/FileObject';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { MessengerType } from '../../types';
import { MessengerFile } from './MessengerFile';
import debug from 'debug';

const log = debug('vonage:messages:messenger');

/**
 * @deprecated please use the MessengerFile class instead
 *
 * @group Messenger
 */
export class File extends MessengerFile {
  /**
   * Constructs a new `File` instance.
   *
   * @param {FileObject} file - The file object containing the URL and optional caption.
   * @param {string} to - The recipient's ID.
   * @param {string} from - The sender's ID.
   * @param {MessageType} messenger - The messenger object specifying the message category and tag.
   * @param {string} clientRef - The client reference.
   */
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
        category: messenger?.category,
        tag: messenger?.tag,
      } as MessengerType,
      clientRef: clientRef,
    });
  }
}
