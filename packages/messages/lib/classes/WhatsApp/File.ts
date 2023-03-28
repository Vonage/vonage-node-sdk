import { FileObject } from '../../interfaces/FileObject';
import { WhatsAppFile } from './WhatsAppFile';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use WhatsAppFile instead
 */
export class File extends WhatsAppFile {
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
