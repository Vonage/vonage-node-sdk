import { MessageObject } from "../../interfaces/MessageObject";
import { MessageTemplate } from "../../interfaces/WhatsApp/MessageTemplate";

export class TemplateMessage implements MessageObject {
    public message_type: string = 'template';
    public channel: string = 'whatsapp';
    public template: MessageTemplate;
    public to: string;
    public from: string;
    public client_ref?: string;
    public whatsapp: {
        policy: string;
        locale: string;
    }

    constructor(template: MessageTemplate, to: string, from: string, locale: string, client_ref?: string) {
        this.template = template;
        this.to = to;
        this.from = from;
        this.client_ref = client_ref;
        this.whatsapp = {
            policy: 'deterministic',
            locale: locale
        }
    }
}