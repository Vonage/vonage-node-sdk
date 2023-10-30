import { FileObject } from '../../interfaces/FileObject';
import { WhatsAppFile } from './WhatsAppFile';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use the WhatsAppFile class instead
 *
 * @group WhatsApp
 */
export class File extends WhatsAppFile {
  /**
   * Constructs a new `File` instance for WhatsApp.
   *
   * @param {FileObject} file - The file object for the message.
   * @param {string} to - The recipient's WhatsApp number.
   * @param {string} from - The sender's WhatsApp number.
   * @param {string} clientRef - (Optional) A unique client reference for the message.
   */
  constructor(
    file: FileObject,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    log('Please update to use the WhatsAppFile class instead');
    super({
      to: to,
      from: from,
      clientRef: clientRef,
      file: file,
    });
  }
}
