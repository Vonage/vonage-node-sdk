/**
 * Represents a file message type.
 */
export type MessageFileType = {
  /**
   * The URL of the file attachment.
   */
  url: string;

  /**
   * An optional caption to accompany the file.
   */
  caption?: string;
};
