import { ImageObject } from '../../interfaces/ImageObject';
import { MessageConfig } from '../../interfaces/Viber/MessageConfig';
import { AbstractImageMessage } from '../AbstractImageMessage';

export class Image extends AbstractImageMessage {
    public channel = 'viber_service';
    /* tslint:disable-next-line */
    public viber_service?: MessageConfig;

    constructor(
        image: ImageObject,
        to: string,
        from: string,
        viberService?: MessageConfig,
        clientRef?: string,
    ) {
        super(image, to, from, clientRef);
        this.viber_service = viberService;
    }
}
