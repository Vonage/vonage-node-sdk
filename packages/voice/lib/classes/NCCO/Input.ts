import { NCCOActions } from '../../enums';
import { DTMFSettings } from '../../types';
import { InputAction } from '../../types';
import { SpeechSettings } from '../../types';
import { Serializable } from '../../ncco';

/**
 * Represents an Input action in the Nexmo Call Control Object (NCCO) for gathering user input.
 */
export class Input implements InputAction, Serializable {
  /**
   * The action type, which is always 'input'.
   */
  action: NCCOActions.INPUT = NCCOActions.INPUT;

  /**
   * An array of input types ('dtmf' and/or 'speech').
   */
  type: string[] = [];

  /**
   * DTMF input settings.
   */
  dtmf?: DTMFSettings;

  /**
   * Speech input settings.
   */
  speech?: SpeechSettings;

  /**
   * An array of URLs to send events to asynchronously.
   */
  eventUrl?: string[] = [];

  /**
   * The HTTP method used to send events (e.g., 'POST' or 'GET').
   */
  eventMethod?: string;

  /**
   * Create a new Input instance.
   *
   * @param {DTMFSettings} dtmf - DTMF input settings.
   * @param {SpeechSettings} speech - Speech input settings.
   * @param {string} eventUrl - URL to send events to asynchronously.
   * @param {string} eventMethod - The HTTP method used to send events.
   */
  constructor(
    dtmf?: DTMFSettings,
    speech?: SpeechSettings,
    eventUrl?: string,
    eventMethod?: string,
  ) {
    if (dtmf) {
      this.type.push('dtmf');
      this.dtmf = dtmf;
    }

    if (speech) {
      this.type.push('speech');
      this.speech = speech;
    }

    if (eventUrl) {
      this.eventUrl.push(eventUrl);
    }
    if (eventMethod) {
      this.eventMethod = eventMethod;
    }

    if (this.type.length === 0) {
      throw new TypeError(
        'Input action must have at least either DTMF or Speech settings',
      );
    }
  }

  /**
   * Serialize the Input action to a Nexmo Call Control Object (NCCO) format.
   *
   * @return {InputAction} - The serialized Input action.
   */
  serializeToNCCO(): InputAction {
    const data: InputAction = {
      action: NCCOActions.INPUT,
      type: this.type,
    };

    if (this.dtmf) {
      data.dtmf = this.dtmf;
    }
    if (this.speech) {
      data.speech = this.speech;
    }
    if (this.eventUrl) {
      data.eventUrl = this.eventUrl;
    }
    if (this.eventMethod) {
      data.eventMethod = this.eventMethod;
    }

    return data;
  }
}
