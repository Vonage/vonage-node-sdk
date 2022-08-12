import { AbstractTextMessageObject } from '../AbstractTextMessage'

export class Text extends AbstractTextMessageObject {
    public channel = 'whatsapp'

    constructor(text: string, to: string, from: string, clientRef?: string) {
        super(text, to, from, clientRef)
    }
}
