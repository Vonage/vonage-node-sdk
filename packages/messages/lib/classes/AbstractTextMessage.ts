import { TextMessage } from "../interfaces/TextMessage";

export abstract class AbstractTextMessageObject implements TextMessage {
    public message_type: string = 'text';
    public channel: string;
    public text: string;
    public to: string;
    public from: string;
    public client_ref?: string;

    constructor(text: string, to: string, from: string, client_ref?: string) {
        this.text = text;
        this.to = to;
        this.from = from;
        this.client_ref = client_ref;
    }
}