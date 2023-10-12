/**
 * Interface representing the configuration for updating a broadcast.
 */
export type BroadcastUpdateConfig = {
  /**
   * The ID of the broadcast to update.
   */
  broadcastId: string;

  /**
   * Whether to include audio in the broadcast.
   */
  hasAudio?: boolean;

  /**
   * Whether to include video in the broadcast.
   */
  hasVideo?: boolean;

  /**
   * The ID of a stream to add to the broadcast.
   */
  addStream?: string;

  /**
   * The ID of a stream to remove from the broadcast.
   */
  removeStream?: string;
}
