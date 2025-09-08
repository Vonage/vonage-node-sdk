import { NCCOActions } from '../../enums/index.js';
import { InputAction, DTMFSettings, SpeechSettings } from '../../types/index.js';
import { Serializable } from '../../ncco.js';

/**
 * Represents an Input action in the Nexmo Call Control Object (NCCO) for gathering user input.
 */
export class Input implements Pick<InputAction, 'action' | 'type' | 'dtmf' | 'speech' | 'eventUrl' | 'eventMethod' | 'mode'>, Serializable {
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
   * Input processing mode, currently only applicable to DTMF. Valid values are
   * synchronous (the default) and asynchronous. If set to asynchronous, all
   * DTMF settings must be left blank. In asynchronous mode, digits are sent one
   * at a time to the event webhook in real time. In the default synchronous
   * mode, this is controlled by the DTMF settings instead and the inputs are
   * sent in batch.
   */
  mode?: 'asynchronous' | 'synchronous';

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
    mode?: 'asynchronous' | 'synchronous',
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
      this.eventUrl = [eventUrl];
    }

    if (eventMethod) {
      this.eventMethod = eventMethod;
    }

    if (mode) {
      this.mode = mode;
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
