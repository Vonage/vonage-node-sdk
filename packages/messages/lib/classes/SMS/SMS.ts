import { AbstractTextMessageObject } from '../AbstractTextMessage';

export class SMS extends AbstractTextMessageObject {
    public channel = 'sms';

    constructor(text: string, to: string, from: string, clientRef?: string) {
        super(text, to, from, clientRef);
    }
}
