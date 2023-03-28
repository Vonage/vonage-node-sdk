import { FileObject } from '../../interfaces/FileObject';
import { WhatsAppFile } from './WhatsAppFile';

export class File extends WhatsAppFile {
  constructor(
    file: FileObject,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    super({
      to: to,
      from: from,
      clientRef: clientRef,
      file: file,
    });
  }
}
