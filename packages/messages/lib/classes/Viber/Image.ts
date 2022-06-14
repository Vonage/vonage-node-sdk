import { ImageObject } from "../../interfaces/ImageObject";
import { MessageType } from "../../interfaces/Messenger/MessageType";
import { MessageConfig } from "../../interfaces/Viber/MessageConfig";
import { AbstractImageMessage } from "../AbstractImageMessage";

export class Image extends AbstractImageMessage {
    public channel = 'viber_service';
    public viber_service?: MessageConfig;
    
    constructor(image: ImageObject, to: string, from: string, viberService?: MessageConfig, client_ref?: string) {
        super(image, to, from, client_ref);
        this.viber_service = viberService;
    }
}