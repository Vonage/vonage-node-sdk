import { NCCOActions, TTSLanguages } from '../../enums';

export type TalkAction = {
  action: NCCOActions.TALK;
  text: string;
  bargeIn?: boolean;
  loop?: number;
  level?: string;
  language?: TTSLanguages;
  style?: string;
  premium?: boolean;
};
