import { ConversationAction as ConnectionActionType } from '../../types/index';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This interface is deprecated. Please update to use the ConnectionActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the ConnectionActionType type
 */
export type ConversationAction = ConnectionActionType;
