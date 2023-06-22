import { NotifyAction } from '../../types/NCCO/NotifyAction';
import { Serializable } from '../../ncco';
import { NCCOActions } from '../../enums';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export class Notify implements NotifyAction, Serializable {
  action: NCCOActions.NOTIFY;
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
