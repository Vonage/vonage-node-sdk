import { NotifyAction as NotifyActionType } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(

  'This interface is deprecated. Please update to use the NotifyActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the NotifyActionType type
 */
export type NotifyAction = NotifyActionType;
