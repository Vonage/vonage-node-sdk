import { NCCOActions } from '../../enums';
import { DTMFSettings } from '../../types/NCCO/DTMFSettings';
import { InputAction } from '../../types/NCCO/InputAction';
import { SpeechSettings } from '../../types/NCCO/SpeechSettings';
import { Serializable } from '../../ncco';

import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export class Input implements InputAction, Serializable {
  action: NCCOActions.INPUT;
  type: string[] = [];
  dtmf?: DTMFSettings;
  speech?: SpeechSettings;
  eventUrl?: string[] = [];
  eventMethod?: string;

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

  serializeToNCCO() {
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
