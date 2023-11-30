import { ConnectAction as ConnectActionType } from '../../types/index';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This interface is deprecated. Please update to use the ConnectActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the ConnectActionType type
 */
export type ConnectAction = ConnectActionType;
