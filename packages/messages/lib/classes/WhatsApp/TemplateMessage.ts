import { MessageObject } from '../../interfaces/MessageObject';
import { MessageTemplate } from '../../interfaces/WhatsApp/MessageTemplate';

export class TemplateMessage implements MessageObject {
    /* tslint:disable-next-line */
    public message_type = 'template';
    public channel = 'whatsapp';
    public template: MessageTemplate;
    public to: string;
    public from: string;
    /* tslint:disable-next-line */
    public client_ref?: string;
    public whatsapp: {
        policy: string
        locale: string
    };

    constructor(
        template: MessageTemplate,
        to: string,
        from: string,
        locale: string,
        clientRef?: string,
    ) {
        this.template = template;
        this.to = to;
        this.from = from;
        this.client_ref = clientRef;
        this.whatsapp = {
            policy: 'deterministic',
            locale,
        };
    }
}
