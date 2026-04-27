import { NCCOActions } from '../../enums/';

/**
 * Represents a Notify action in an NCCO.
 */
export class Notify {
  action = NCCOActions.NOTIFY;
  payload;

  eventUrl;
  eventMethod;

  /**
   * Creates a new Notify action.
   *
   * @param {Object} payload - The payload data to send with the notification.
   * @param {string} eventUrl - The URL where the notification events will be sent.
   * @param {string} [eventMethod] - The HTTP method for sending notification events (e.g., "POST").
   */
  constructor(
  payload,
  eventUrl,
  eventMethod)
  {
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
  serializeToNCCO() {
    const data = {
      action: NCCOActions.NOTIFY,
      payload: this.payload,
      eventUrl: this.eventUrl
    };

    if (this.eventMethod) {
      data.eventMethod = this.eventMethod;
    }

    return data;
  }
}
