import { APILinks } from '@vonage/server-client';
import { CallDetail } from '../CallDetail';
import { CallEndpointResponse } from './CallEndpointResponse';

/**
 * Represents the response for retrieving call details.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CallDetailResponse = {
  /**
   * The UUID of the conversation associated with the call.
   */
  conversation_uuid: string;

  /**
   * The start time of the call.
   */
  start_time: string;

  /**
   * The end time of the call.
   */
  end_time: string;

  /**
   * Information about the recipient (callee) of the call.
   */
  to: CallEndpointResponse;
} & Omit<
  CallDetail,
  'conversationUUID' | 'startTime' | 'endTime' | 'to' | 'from'
  > &
  APILinks;
