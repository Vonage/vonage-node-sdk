import { VBCEndpoint } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the VBCEndpoint type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the VBCEndpoint type
 */
export type VBCEndpointObject = VBCEndpoint;
