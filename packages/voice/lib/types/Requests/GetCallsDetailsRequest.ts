import { GetCallDetailsParameters } from '../Parameters';

/**
 * Represents the request payload for retrieving call details with various filtering options.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type GetCallDetailsRequest = {
  /**
   * The start date for filtering call records.
   */
  date_start?: string;

  /**
   * The end date for filtering call records.
   */
  date_end?: string;

  /**
   * The maximum number of records to return per page.
   */
  page_size?: number;

  /**
   * The record index for pagination.
   */
  record_index?: number;

  /**
   * The UUID of the conversation to filter call records by.
   */
  conversation_uuid?: string;
} & Omit<
  GetCallDetailsParameters,
  'dateEnd' | 'dateStart' | 'pageSize' | 'recordIndex' | 'conversationUuid'
  >;
