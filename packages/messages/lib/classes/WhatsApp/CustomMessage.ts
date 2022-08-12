import { MessageObject } from '../../interfaces/MessageObject'
import { CustomPayload } from '../../interfaces/WhatsApp/CustomPayload'

export class CustomMessage implements MessageObject {
    /* tslint:disable-next-line */
    public message_type: string = 'custom'
    public channel: string = 'whatsapp'
    public custom: CustomPayload
    public to: string
    public from: string
    /* tslint:disable-next-line */
    public client_ref?: string

    constructor(
        custom: CustomPayload,
        to: string,
        from: string,
        clientRef?: string
    ) {
        this.custom = custom
        this.to = to
        this.from = from
        this.client_ref = clientRef
    }
}
