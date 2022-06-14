import { ImageMessage } from "../interfaces/ImageMessage";
import { ImageObject } from "../interfaces/ImageObject";

export abstract class AbstractImageMessage implements ImageMessage {
    public message_type: string = 'image';
    public channel: string;
    public image: ImageObject;
    public to: string;
    public from: string;
    public client_ref?: string;

    constructor(image: ImageObject, to: string, from: string, client_ref?: string) {
        this.image = image;
        this.to = to;
        this.from = from;
        this.client_ref = client_ref;
    }
}