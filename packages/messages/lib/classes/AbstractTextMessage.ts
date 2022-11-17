import { TextMessage } from '../interfaces/TextMessage';

export abstract class AbstractTextMessageObject implements TextMessage {
    /* tslint:disable-next-line */
    public message_type = 'text';
    public channel: string;
    public text: string;
    public to: string;
    public from: string;
    /* tslint:disable-next-line */
    public client_ref?: string;

    constructor(text: string, to: string, from: string, clientRef?: string) {
        this.text = text;
        this.to = to;
        this.from = from;
        this.client_ref = clientRef;
    }
}
