import { MessageObject } from "../../interfaces/MessageObject";

export class Vcard implements MessageObject {
    public message_type: string = 'vcard';
    public channel: string = 'mms';
    public vcard: { url: string };
    public to: string;
    public from: string;
    public client_ref?: string;

    constructor(vcard_url: string, to: string, from: string, client_ref?: string) {
        this.vcard = { url: vcard_url };
        this.to = to;
        this.from = from;
        this.client_ref = client_ref;
      }
}