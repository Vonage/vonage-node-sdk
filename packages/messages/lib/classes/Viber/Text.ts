import { MessageConfig } from '../../interfaces/Viber/MessageConfig'
import { AbstractTextMessageObject } from '../AbstractTextMessage'

export class Text extends AbstractTextMessageObject {
    public channel = 'viber_service'
    /* tslint:disable-next-line */
    public viber_service?: MessageConfig

    constructor(
        text: string,
        to: string,
        from: string,
        viberService?: MessageConfig,
        clientRef?: string
    ) {
        super(text, to, from, clientRef)
        this.viber_service = viberService
    }
}
