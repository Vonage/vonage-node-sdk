import { MessageType } from '../../interfaces/Messenger/MessageType'
import { AbstractTextMessageObject } from '../AbstractTextMessage'

export class Text extends AbstractTextMessageObject {
    public channel = 'messenger'
    public messenger?: MessageType

    constructor(
        text: string,
        to: string,
        from: string,
        messenger?: MessageType,
        clientRef?: string
    ) {
        super(text, to, from, clientRef)
        this.messenger = messenger
    }
}
