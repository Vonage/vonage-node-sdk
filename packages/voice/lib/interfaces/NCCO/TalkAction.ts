import { TalkAction as TalkActionType } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the TalkActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the TalkActionType type
 */
export type TalkAction = TalkActionType;
