import { GetCallDetailsParameters } from './GetCallsDetailsParameters.js';

/**
 * @deprecated Pelease use GetCallDetailsParameters instead
 */
export type CallListFilter = {
  date_start?: string;
  date_end?: string;
  page_size?: string;
  record_index?: string;
  conversation_uuid?: string;
} & GetCallDetailsParameters;
