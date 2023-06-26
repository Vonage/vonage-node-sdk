import { CallStatus } from '../enums';

export type BasicCallDetail = {
  uuid: string;
  conversationUUID: string;
  duration: string;
  status: CallStatus;
};
