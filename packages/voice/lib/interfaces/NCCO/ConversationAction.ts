import { ConversationAction as ConnectionActionType } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(

  'This interface is deprecated. Please update to use the ConnectionActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the ConnectionActionType type
 */
export type ConversationAction = ConnectionActionType;
