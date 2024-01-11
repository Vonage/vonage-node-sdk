import { SpeechSettings as SpeechSettingsType } from '../../types/index';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This interface is deprecated. Please update to use the SpeechSettingsType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the SpeechSettingsType type
 */
export type SpeechSettings = SpeechSettingsType;
