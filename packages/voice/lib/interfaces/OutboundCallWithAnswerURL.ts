import debug from 'debug';
import { CallWithAnswerURL } from '../types';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This interface is deprecated. Please update to use the CallWithAnswerURL type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the CallWithAnswerURL type
 */
export type OutboundCallWithAnswerURL = CallWithAnswerURL;
