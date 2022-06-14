import { AbstractTextMessageObject } from "../AbstractTextMessage";

export class SMS extends AbstractTextMessageObject {
    public channel = 'sms';

    constructor(text: string, to: string, from: string, client_ref?: string) {
        super(text, to, from, client_ref);
    }
}