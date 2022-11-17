import { FileMessage } from '../interfaces/FileMessage';
import { FileObject } from '../interfaces/FileObject';

export abstract class AbstractFileMessage implements FileMessage {
    /* tslint:disable-next-line */
    public message_type = 'file';
    public channel: string;
    public file: FileObject;
    public to: string;
    public from: string;
    /* tslint:disable-next-line */
    public client_ref?: string;

    constructor(
        file: FileObject,
        to: string,
        from: string,
        clientRef?: string,
    ) {
        this.file = file;
        this.to = to;
        this.from = from;
        this.client_ref = clientRef;
    }
}
