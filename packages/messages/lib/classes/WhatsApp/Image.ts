import { ImageObject } from '../../interfaces/ImageObject'
import { AbstractImageMessage } from '../AbstractImageMessage'

export class Image extends AbstractImageMessage {
    public channel = 'whatsapp'

    constructor(
        image: ImageObject,
        to: string,
        from: string,
        clientRef?: string
    ) {
        super(image, to, from, clientRef)
    }
}
