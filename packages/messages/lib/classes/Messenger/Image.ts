import { ImageObject } from '../../interfaces/ImageObject'
import { MessageType } from '../../interfaces/Messenger/MessageType'
import { AbstractImageMessage } from '../AbstractImageMessage'

export class Image extends AbstractImageMessage {
    public channel = 'messenger'
    public messenger?: MessageType

    constructor(
        image: ImageObject,
        to: string,
        from: string,
        messenger?: MessageType,
        clientRef?: string
    ) {
        super(image, to, from, clientRef)
        this.messenger = messenger
    }
}
