import { NCCOActions } from '../../enums';
import { DTMFSettings } from './DTMFSettings';
import { SpeechSettings } from './SpeechSettings';

/**
 * Represents an Input action in a Nexmo Call Control Object (NCCO).
 * An Input action allows you to collect user input, including Dual-Tone Multi-Frequency (DTMF) and speech recognition.
 */
export type InputAction = {
  /**
   * The action type, which is set to NCCOActions.INPUT for Input actions.
   */
  action: NCCOActions.INPUT;

  /**
   * An array that specifies the input types that are enabled.
   * Possible values are 'dtmf' for DTMF input and 'speech' for speech recognition.
   * At least one input type must be enabled.
   */
  type: string[];

  /**
   * Optional settings for Dual-Tone Multi-Frequency (DTMF) input recognition.
   * Use this property to configure how DTMF input is handled.
   */
  dtmf?: DTMFSettings;

  /**
   * Optional settings for speech recognition input.
   * Use this property to configure speech recognition options.
   */
  speech?: SpeechSettings;

  /**
   * An array of URLs where events related to this Input action will be sent.
   * Events may include user input and recognition results.
   */
  eventUrl?: string[];

  /**
   * The HTTP method used to send events to the specified event URLs.
   * Valid values are 'GET' and 'POST'.
   */
  eventMethod?: string;
};
