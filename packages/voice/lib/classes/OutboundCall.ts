import { PhoneEndpointObject } from '../interfaces/Endpoint/PhoneEndpointObject';
import { CallEndpoint } from '../types/Endpoint/CallEndpoint';
import debug from 'debug';
import { HttpMethod, MachineDetectionBehavior } from '../enums';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export abstract class OutboundCall {
  to: CallEndpoint[];
  from: PhoneEndpointObject;
  randomFromNumber?: boolean;
  eventUrl?: string[];
  eventMethod?: HttpMethod;
  machineDetection?: MachineDetectionBehavior;
  lengthTimer?: number;
  ringingTimer?: number;

  constructor(to: CallEndpoint, from?: PhoneEndpointObject) {
    this.to = [to];

    if (from) {
      this.from = from;
    } else {
      this.randomFromNumber = true;
    }
  }
}
