import { NotifyAction as NotifyActionType } from '../../types/index';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This interface is deprecated. Please update to use the NotifyActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the NotifyActionType type
 */
export type NotifyAction = NotifyActionType;
