import { FileObject } from "../../interfaces/FileObject";
import { MessageType } from "../../interfaces/Messenger/MessageType";
import { AbstractFileMessage } from "../AbstractFileMessage";

export class File extends AbstractFileMessage {
    public channel = 'messenger';
    public messenger?: MessageType;
    
    constructor(file: FileObject, to: string, from: string, messenger?: MessageType, client_ref?: string) {
        super(file, to, from, client_ref);
        this.messenger = messenger;
    }
}