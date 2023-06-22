import { CallStatus } from '../enums';

export type CallResult = {
  uuid: string;
  status: CallStatus;
  direction: 'inbound' | 'outbound';
  conversationUUID: string;
};
