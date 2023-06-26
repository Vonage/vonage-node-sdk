import { StreamAction as StreamActionType } from '../../types/index';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the
 *             appropriate type
 */
export type StreamAction = StreamActionType;
