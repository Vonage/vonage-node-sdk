import { MessageConfig } from "../../interfaces/Viber/MessageConfig";
import { AbstractTextMessageObject } from "../AbstractTextMessage";

export class Text extends AbstractTextMessageObject {
    public channel = 'viber_service';
    public viber_service?: MessageConfig;

    constructor(text: string, to: string, from: string, viberService?: MessageConfig, client_ref?: string) {
        super(text, to, from, client_ref);
        this.viber_service = viberService;
    }
}