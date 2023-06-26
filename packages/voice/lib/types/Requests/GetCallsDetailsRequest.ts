import { GetCallDetailsParameters } from '../Parameters/GetCallsDetailsParameters';

export type GetCallDetailsRequest = {
  date_start?: string;
  date_end?: string;
  page_size?: number;
  record_index?: number;
  conversation_uuid?: string;
} & Omit<
  GetCallDetailsParameters,
  'dateEnd' | 'dateStart' | 'pageSize' | 'recordIndex' | 'conversationUuid'
>;
