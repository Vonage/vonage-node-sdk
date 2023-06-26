import { NCCOActions } from '../../enums';

export type NotifyAction = {
  action: NCCOActions.NOTIFY;
  payload: Record<string, string>;
  eventUrl: string[];
  eventMethod?: string;
};
