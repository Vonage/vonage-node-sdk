import { NotifyAction } from '../../types/NCCO/NotifyAction';
import { Serializable } from '../../ncco';
import { NCCOActions } from '../../enums';

export class Notify implements NotifyAction, Serializable {
  action: NCCOActions.NOTIFY = NCCOActions.NOTIFY;
  payload: {
    [key: string]: string;
  };
  eventUrl: string[];
  eventMethod?: string;

  constructor(
    payload: { [key: string]: string },
    eventUrl: string,
    eventMethod?: string,
  ) {
    this.payload = payload;
    this.eventUrl = [eventUrl];

    if (eventMethod) {
      this.eventMethod = eventMethod;
    }
  }

  serializeToNCCO() {
    const data: NotifyAction = {
      action: NCCOActions.NOTIFY,
      payload: this.payload,
      eventUrl: this.eventUrl,
    };

    if (this.eventMethod) {
      data.eventMethod = this.eventMethod;
    }

    return data;
  }
}
