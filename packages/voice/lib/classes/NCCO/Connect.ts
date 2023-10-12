import { NCCOActions } from '../../enums';
import { ConnectEventType } from '../../enums';
import { MachineDetection } from '../../enums';
import { ConnectAction } from '../../types';
import { Serializable } from '../../ncco';
import { CallEndpoint } from '../../types';

/**
 * Represents a Connect action in the Nexmo Call Control Object (NCCO) for making voice calls.
 */
export class Connect implements ConnectAction, Serializable {
  /**
   * The action type, which is always 'connect'.
   */
  action: NCCOActions.CONNECT = NCCOActions.CONNECT;

  /**
   * An array of CallEndpoint objects representing the endpoints to connect to in the call.
   *
   * @param {CallEndpoint} endpoint - An array of CallEndpoint objects
   * representing the endpoints to connect to in the call.
   */
  endpoint: CallEndpoint[];

  /**
   * The caller's phone number to display as the caller ID.
   *
   * @param {string} from - The caller's phone number to display as the caller ID.
   */
  from?: string;

  /**
   * Set to true to use a random phone number as the caller ID from the list of
   * numbers assigned to the current application.
   *
   * @param {boolean} randomFromNumber - Set to true to use a random phone number as the caller ID.
   */
  randomFromNumber?: boolean;

  /**
   * The event type for call progress events sent to the specified event URL.
   *
   * @param {ConnectEventType} eventType - The event type for call progress events.
   */
  eventType?: ConnectEventType;

  /**
   * The time in seconds that Vonage waits for the call to be answered before timing out.
   *
   * @param {number} timeout - The timeout value in seconds.
   */
  timeout?: number;

  /**
   * The maximum number of concurrent calls that can be handled by your application.
   *
   * @param {number} limit - The maximum number of concurrent calls.
   */
  limit?: number;

  /**
   * Configure the behavior when Vonage detects that the call is answered by voicemail.
   *
   * @param {MachineDetection} machineDetection - The behavior when voicemail is detected.
   */
  machineDetection?: MachineDetection;

  /**
   * An array of event URLs where call progress events are sent to. Multiple URLs can be specified.
   *
   * @param {string} eventUrl - An array of event URLs.
   */
  eventUrl?: string[];

  /**
   * The HTTP method used to send event information to the event URL(s).
   *
   * @param {string} eventMethod - The HTTP method used for event callbacks.
   */
  eventMethod?: string;

  /**
   * The URL of a ringback tone to play to the caller while waiting for the call to be answered.
   *
   * @param {string} ringbackTone - The URL of the ringback tone audio file.
   */
  ringbackTone?: string;

  /**
   * Create a new Connect instance.
   *
   * @param {CallEndpoint} endpoint - An array of CallEndpoint objects representing the endpoints to connect to in the call.
   * @param {string} from - The caller's phone number to display as the caller ID.
   * @param {boolean} randomFromNumber - Set to true to use a random phone number as the caller ID.
   * @param {ConnectEventType} eventType - The event type for call progress events.
   * @param {number} timeout - The timeout value in seconds.
   * @param {number} limit - The maximum number of concurrent calls.
   * @param {MachineDetection} machineDetection - The behavior when voicemail is detected.
   * @param {string} eventUrl - An array of event URLs.
   * @param {string} eventMethod - The HTTP method used for event callbacks.
   * @param {string} ringbackTone - The URL of the ringback tone audio file.
   */

  constructor(
    endpoint: CallEndpoint,
    from?: string,
    randomFromNumber?: boolean,
    eventType?: ConnectEventType,
    timeout?: number,
    limit?: number,
    machineDetection?: MachineDetection,
    eventUrl?: string,
    eventMethod?: string,
    ringbackTone?: string,
  ) {
    this.endpoint = [endpoint];

    if (from) {
      this.from = from;
    }
    if (randomFromNumber) {
      this.randomFromNumber = randomFromNumber;
    }
    if (eventType) {
      this.eventType = eventType;
    }
    if (timeout) {
      this.timeout = timeout;
    }
    if (limit) {
      this.limit = limit;
    }
    if (machineDetection) {
      this.machineDetection = machineDetection;
    }
    if (eventUrl) {
      this.eventUrl = [eventUrl];
    }
    if (eventMethod) {
      this.eventMethod = eventMethod;
    }
    if (ringbackTone) {
      this.ringbackTone = ringbackTone;
    }
  }

  /**
   * Serialize the Connect action to a Nexmo Call Control Object (NCCO) format.
   *
   * @return {ConnectAction} - The serialized Connect action.
   */
  serializeToNCCO() {
    const data: ConnectAction = {
      action: NCCOActions.CONNECT,
      endpoint: this.endpoint,
    };

    if (this.from) {
      data.from = this.from;
    }
    if (this.randomFromNumber) {
      data.randomFromNumber = this.randomFromNumber;
    }
    if (this.eventType) {
      data.eventType = this.eventType;
    }
    if (this.timeout) {
      data.timeout = this.timeout;
    }
    if (this.limit) {
      data.limit = this.limit;
    }
    if (this.machineDetection) {
      data.machineDetection = this.machineDetection;
    }
    if (this.eventUrl) {
      data.eventUrl = this.eventUrl;
    }
    if (this.eventMethod) {
      data.eventMethod = this.eventMethod;
    }
    if (this.ringbackTone) {
      data.ringbackTone = this.ringbackTone;
    }

    return data;
  }
}
