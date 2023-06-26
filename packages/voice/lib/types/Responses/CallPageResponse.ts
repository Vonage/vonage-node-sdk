import { APILinks } from '@vonage/server-client';
import { CallDetailResponse } from '../../types';

export type CallPageResponse = {
  count: number;
  page_size: number;
  record_index: number;
  _embedded: {
    calls: Array<CallDetailResponse>;
  };
} & APILinks;
