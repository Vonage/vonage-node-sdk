import { ConnectAction as ConnectActionType } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(

  'This interface is deprecated. Please update to use the ConnectActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the ConnectActionType type
 */
export type ConnectAction = ConnectActionType;
