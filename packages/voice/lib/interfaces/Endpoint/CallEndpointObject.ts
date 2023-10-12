import { CallEndpoint } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the CallEndpoint type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the CallEndpoint type
 */
export type CallEndpointObject = CallEndpoint;
