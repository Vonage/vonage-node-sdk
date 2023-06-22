import debug from 'debug';
import { CallWithAnswerURL } from '../types/index';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the
 *             appropriate type
 */
export type OutboundCallWithAnswerURL = CallWithAnswerURL;
