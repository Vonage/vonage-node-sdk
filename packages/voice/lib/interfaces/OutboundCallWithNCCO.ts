import { CallWithNCCO } from '../types';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the CallWithNCCO type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the CallWithNCCO type
 */
export type OutboundCallWithNCCO = CallWithNCCO;
