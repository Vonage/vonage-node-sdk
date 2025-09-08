import { PhoneEndpoint } from '../../types/index.js';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the PhoneEndpoint type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the PhoneEndpoint type
 */
export type PhoneEndpointObject = PhoneEndpoint;
