import { PSTNEndpoint } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the PSTNEndpoint instead',
);

/**
 * Represents a PSTN (Public Switched Telephone Network) endpoint for making phone calls.
 * @deprecated This class is deprecated. Please update to use the PSTNEndpoint type instead
 */
export class PhoneEndpoint implements PSTNEndpoint {
  /**
   * The type of the endpoint, which is always 'phone'.
   */
  type: 'phone';

  /**
   * The phone number associated with this PSTN endpoint.
   */
  number: string;

  /**
   * Optional DTMF (Dual-Tone Multi-Frequency) answer to send when the call is answered.
   */
  dtmfAnswer?: string;

  /**
   * Create a new PhoneEndpoint instance.
   *
   * @param {string} phoneNumber - The phone number for the PSTN endpoint.
   * @param {string} dtmfAnswer - Optional DTMF answer to send when the call is answered.
   */
  constructor(phoneNumber: string, dtmfAnswer?: string) {
    this.type = 'phone';
    this.number = phoneNumber;

    if (dtmfAnswer) {
      this.dtmfAnswer = dtmfAnswer;
    }
  }
}
