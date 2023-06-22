import { NCCOActions } from '../../enums';

export type StreamAction = {
  action: NCCOActions.STREAM;
  streamUrl: Array<string>;
  level?: number;
  bargeIn?: boolean;
  loop?: number;
};
