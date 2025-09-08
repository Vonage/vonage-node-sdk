import { NotifyAction } from '../../types/index.js';
import { Serializable } from '../../ncco.js';
import { NCCOActions } from '../../enums/index.js';

/**
 * Represents a Notify action in an NCCO.
 */
export class Notify implements NotifyAction, Serializable {
  action: NCCOActions.NOTIFY = NCCOActions.NOTIFY;
  payload: {
    [key: string]: string;
  };
  eventUrl: string[];
  eventMethod?: string;

  /**
   * Creates a new Notify action.
   *
   * @param {Object} payload - The payload data to send with the notification.
   * @param {string} eventUrl - The URL where the notification events will be sent.
   * @param {string} [eventMethod] - The HTTP method for sending notification events (e.g., "POST").
   */
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

  /**
   * Serialize the Notify action to an NCCO-compatible format.
   *
   * @return {NotifyAction} - The serialized Notify action.
   */
  serializeToNCCO(): NotifyAction {
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
