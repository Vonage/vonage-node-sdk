import { ImageMessage } from '../interfaces/ImageMessage';
import { ImageObject } from '../interfaces/ImageObject';

export abstract class AbstractImageMessage implements ImageMessage {
    /* tslint:disable-next-line */
    public message_type = 'image';
    public channel: string;
    public image: ImageObject;
    public to: string;
    public from: string;
    /* tslint:disable-next-line */
    public client_ref?: string;

    constructor(
        image: ImageObject,
        to: string,
        from: string,
        clientRef?: string,
    ) {
        this.image = image;
        this.to = to;
        this.from = from;
        this.client_ref = clientRef;
    }
}
