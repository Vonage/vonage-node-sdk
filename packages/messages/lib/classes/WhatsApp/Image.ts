import { ImageObject } from "../../interfaces/ImageObject";
import { AbstractImageMessage } from "../AbstractImageMessage";

export class Image extends AbstractImageMessage {
    public channel = 'whatsapp';
    
    constructor(image: ImageObject, to: string, from: string, client_ref?: string) {
        super(image, to, from, client_ref);
    }
}