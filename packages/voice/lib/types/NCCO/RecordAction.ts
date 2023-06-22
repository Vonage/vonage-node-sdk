import { NCCOActions, RecordingFormat } from '../../enums';

export type RecordAction = {
  action: NCCOActions.RECORD;
  eventUrl?: string[];
  beepStart?: boolean;
  eventMethod?: string;
  format?: RecordingFormat;
  split?: 'conversation';
  channels?: number;
  endOnSilence?: number;
  endOnKey?: string;
  timeOut?: number;
};
