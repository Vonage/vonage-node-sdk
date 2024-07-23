import { SpeechSettings as SpeechSettingsType } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(

  'This interface is deprecated. Please update to use the SpeechSettingsType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the SpeechSettingsType type
 */
export type SpeechSettings = SpeechSettingsType;
