import { MessageObject } from '../../interfaces/MessageObject';

export class Vcard implements MessageObject {
    /* tslint:disable-next-line */
    public message_type = 'vcard';
    public channel = 'mms';
    public vcard: { url: string };
    public to: string;
    public from: string;
    /* tslint:disable-next-line */
    public client_ref?: string;

    constructor(
        vcardUrl: string,
        to: string,
        from: string,
        clientRef?: string,
    ) {
        this.vcard = { url: vcardUrl };
        this.to = to;
        this.from = from;
        this.client_ref = clientRef;
    }
}
