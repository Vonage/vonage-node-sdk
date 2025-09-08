import debug from 'debug';
import { CallWithAnswerURL } from '../types/index.js';

debug('@vonage/voice')(

  'This interface is deprecated. Please update to use the CallWithAnswerURL type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the CallWithAnswerURL type
 */
export type OutboundCallWithAnswerURL = CallWithAnswerURL;
