/**
 * Represents callback URLs for various room-related events.
 */
export type RoomCallbackURLS = {
  /**
   * The callback URL for rooms events.
   */
  roomsCallbackUrl: string;

  /**
   * The callback URL for sessions events.
   */
  sessionsCallbackUrl: string;

  /**
   * The callback URL for recordings events.
   */
  recordingsCallbackUrl: string;
};
