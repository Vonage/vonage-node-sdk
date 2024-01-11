import { CallStatus } from '../../enums';

/**
 * Represents parameters for retrieving call details.
 */
export type GetCallDetailsParameters = {
  /**
   * Optional: The status of the calls to retrieve.
   */
  status?: CallStatus;

  /**
   * Optional: The start date for filtering calls.
   */
  dateStart?: string;

  /**
   * Optional: The end date for filtering calls.
   */
  dateEnd?: string;

  /**
   * Optional: The page size for pagination.
   */
  pageSize?: number;

  /**
   * Optional: The record index for pagination.
   */
  recordIndex?: number;

  /**
   * Optional: The order in which calls are retrieved (ascending or descending).
   */
  order?: 'asc' | 'desc';

  /**
   * Optional: The conversation UUID for filtering calls.
   */
  conversationUuid?: string;
};
