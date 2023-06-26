import { APILinks } from '@vonage/server-client';
import { CallDetail } from '../CallDetail';
import { CallEndpointResponse } from './CallEndpointResponse';

export type CallDetailResponse = {
  conversation_uuid: string;
  start_time: string;
  end_time: string;
  to: CallEndpointResponse;
} & Omit<
  CallDetail,
  'conversationUUID' | 'startTime' | 'endTime' | 'to' | 'from'
> &
  APILinks;
