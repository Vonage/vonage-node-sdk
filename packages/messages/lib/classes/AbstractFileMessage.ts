import { FileMessage } from "../interfaces/FileMessage";
import { FileObject } from "../interfaces/FileObject";

export abstract class AbstractFileMessage implements FileMessage {
    public message_type: string = 'file';
    public channel: string;
    public file: FileObject;
    public to: string;
    public from: string;
    public client_ref?: string;

    constructor(file: FileObject, to: string, from: string, client_ref?: string) {
        this.file = file;
        this.to = to;
        this.from = from;
        this.client_ref = client_ref;
    }
}