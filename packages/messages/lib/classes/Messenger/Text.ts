import { MessageType } from "../../interfaces/Messenger/MessageType";
import { AbstractTextMessageObject } from "../AbstractTextMessage";

export class Text extends AbstractTextMessageObject {
    public channel = 'messenger';
    public messenger?: MessageType;

    constructor(text: string, to: string, from: string, messenger?: MessageType, client_ref?: string) {
        super(text, to, from, client_ref);
        this.messenger = messenger;
    }
}