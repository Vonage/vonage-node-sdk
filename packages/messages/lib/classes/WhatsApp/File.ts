import { FileObject } from "../../interfaces/FileObject";
import { AbstractFileMessage } from "../AbstractFileMessage";

export class File extends AbstractFileMessage {
    public channel = 'whatsapp';
    
    constructor(file: FileObject, to: string, from: string, client_ref?: string) {
        super(file, to, from, client_ref);
    }
}