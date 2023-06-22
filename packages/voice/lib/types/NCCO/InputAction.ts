import { NCCOActions } from '../../enums';
import { DTMFSettings } from './DTMFSettings';
import { SpeechSettings } from './SpeechSettings';

export type InputAction = {
  action: NCCOActions.INPUT;
  type: string[];
  dtmf?: DTMFSettings;
  speech?: SpeechSettings;
  eventUrl?: string[];
  eventMethod?: string;
};
