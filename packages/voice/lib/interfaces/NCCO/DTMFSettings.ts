import { DTMFSettings as DTMFSettingsType } from '../../types/index';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This interface is deprecated. Please update to use the DTMFSettingsType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the DTMFSettingsType type
 */
export type DTMFSettings = DTMFSettingsType;
