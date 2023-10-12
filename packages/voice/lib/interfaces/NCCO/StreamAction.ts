import { StreamAction as StreamActionType } from '../../types/index';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This interface is deprecated. Please update to use the StreamActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the StreamActionType type
 */
export type StreamAction = StreamActionType;
