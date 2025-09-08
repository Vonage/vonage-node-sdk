import { StreamAction as StreamActionType } from '../../types/index.js';
import debug from 'debug';

debug('@vonage/voice')(

  'This interface is deprecated. Please update to use the StreamActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the StreamActionType type
 */
export type StreamAction = StreamActionType;
