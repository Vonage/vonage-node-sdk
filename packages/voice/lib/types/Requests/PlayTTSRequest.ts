import { TTSVoices } from '../../enums/index';
import { PlayTTSParameters } from '../Parameters/PlayTTSParameters';

export type PlayTTSRequest = {
  voice_name?: TTSVoices;
} & Omit<PlayTTSParameters, 'voiceName'>;
