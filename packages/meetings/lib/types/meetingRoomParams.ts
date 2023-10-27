/**
 * Represents parameters for querying meeting rooms.
 */
export type MeetingRoomParams = {
  /**
   * The maximum number of items to retrieve per page.
   */
  pageSize?: number;

  /**
   * The starting identifier for filtering meeting rooms.
   */
  startId?: string;

  /**
   * The ending identifier for filtering meeting rooms.
   */
  endId?: string;
};
