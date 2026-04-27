import { MessengerFile } from './MessengerFile.js';
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
  file,
  to,
  from,
  messenger,
  clientRef)
  {
    log('Please update to use the MessengerFile class instead');
    super({
      file: file,
      to: to,
      from: from,
      messenger: {
        category: messenger?.category,
        tag: messenger?.tag
      },
      clientRef: clientRef
    });
  }
}
