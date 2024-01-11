import { RecordAction as RecordActionType } from '../../types/index';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This interface is deprecated. Please update to use the RecordActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the RecordActionType type
 */
export type RecordAction = RecordActionType;
