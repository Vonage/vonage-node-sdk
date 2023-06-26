import { CallStatus } from '../../enums/CallStatus';

export type GetCallDetailsParameters = {
  status?: CallStatus;
  dateStart?: string;
  dateEnd?: string;
  pageSize?: number;
  recordIndex?: number;
  order?: 'asc' | 'desc';
  conversationUuid?: string;
};
