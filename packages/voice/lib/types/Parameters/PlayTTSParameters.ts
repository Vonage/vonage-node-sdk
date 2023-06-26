import { TTSLanguages, TTSVoices } from '../../enums/index';

export type PlayTTSParameters = {
  text: string;
  language?: TTSLanguages;
  style?: number;
  premium?: boolean;
  voiceName?: TTSVoices;
  loop?: number;
  level?: string;
};
