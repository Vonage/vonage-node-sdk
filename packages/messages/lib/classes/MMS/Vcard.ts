import { MMSVcard } from './MMSVcard';

export class Vcard extends MMSVcard {
  constructor(
    vcardUrl: string,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    super({
      vcard: { url: vcardUrl },
      to: to,
      from: from,
      clientRef: clientRef,
    });
  }
}
