import { AbstractTextMessageObject } from "../AbstractTextMessage";

export class Text extends AbstractTextMessageObject {
    public channel = 'whatsapp';

    constructor(text: string, to: string, from: string, client_ref?: string) {
        super(text, to, from, client_ref);
    }
}