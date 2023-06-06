import { CallEndpoint } from '../types/Endpoint/CallEndpoint';
import { PhoneEndpointObject } from './Endpoint/PhoneEndpointObject';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the
 *             appropriate type
 */
export interface OutboundCall {
  to: CallEndpoint[];
  from?: PhoneEndpointObject;
  randomFromNumber?: boolean;
  eventUrl?: string[];
  eventMethod?: string;
  machineDetection?: boolean;
  lengthTimer?: number;
  ringingTimer?: number;
}
