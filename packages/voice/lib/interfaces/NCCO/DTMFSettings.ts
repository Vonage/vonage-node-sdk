import { DTMFSettings as DTMFSettingsType } from '../../types/index.js';
import debug from 'debug';

debug('@vonage/voice')(

  'This interface is deprecated. Please update to use the DTMFSettingsType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the DTMFSettingsType type
 */
export type DTMFSettings = DTMFSettingsType;
