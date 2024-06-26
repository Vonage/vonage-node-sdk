/**
 * Represents the response data for a media item.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type MediaItemResponse = {
  /**
   * The filename of the object as it was originally uploaded.
   */
  original_file_name: string;

  /**
   * The IETF MIME type of the file.
   */
  mime_type: string;

  /**
   * The ID of your Nexmo account. This is the same as your API key.
   */
  account_id: string;

  /**
   * An internal identifier of how the file is stored.
   */
  store_id: string;

  /**
   * The maximum number of times the file may be downloaded.
   */
  max_downloads_allowed: number;

  /**
   * The number of times the file has been downloaded.
   */
  times_downloaded: number;

  /**
   * The size of the file in bytes.
   */
  media_size: number;

  /**
   * A timestamp for the time that the file was created.
   */
  time_created: string;

  /**
   * A timestamp for the time that the file was last modified.
   */
  time_last_updated: string;

  /**
   * Whether the item is available for download without authentication.
   */
  public: boolean;

  /**
   * A user-set string containing metadata about the media file.
   */
  metadata_primary?: string | null;

  /**
   * A user-set string containing further metadata about the media file.
   */
  metadata_secondary?: string | null;

  /**
   * A UUID representing the object.
   */
  id: string;

  /**
   * An identifier for the content. This will change if the content of the file has been changed
   * (i.e., if you upload a new version of the file). For more information, see Wikipedia: HTTP ETag.
   */
  etag: string;
};
