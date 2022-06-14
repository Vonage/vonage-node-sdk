import { ImageObject } from "../../interfaces/ImageObject";
import { MessageType } from "../../interfaces/Messenger/MessageType";
import { AbstractImageMessage } from "../AbstractImageMessage";

export class Image extends AbstractImageMessage {
    public channel = 'messenger';
    public messenger?: MessageType;
    
    constructor(image: ImageObject, to: string, from: string, messenger?: MessageType, client_ref?: string) {
        super(image, to, from, client_ref);
        this.messenger = messenger;
    }
}