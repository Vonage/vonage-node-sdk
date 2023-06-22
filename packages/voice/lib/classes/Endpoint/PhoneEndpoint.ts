import { PSTNEndpoint } from '../../types/Endpoint/PSTNEndpoint';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export class PhoneEndpoint implements PSTNEndpoint {
  type: 'phone';
  number: string;
  dtmfAnswer?: string;

  constructor(phoneNumber: string, dtmfAnswer?: string) {
    this.number = phoneNumber;

    if (dtmfAnswer) {
      this.dtmfAnswer = dtmfAnswer;
    }
  }
}
