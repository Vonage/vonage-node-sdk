/**
 * Represents the response data for a media item.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} MediaItemResponse
 * @property {string} original_file_name - The filename of the object as it was originally uploaded.
 * @property {string} mime_type - The IETF MIME type of the file.
 * @property {string} account_id - The ID of your Nexmo account. This is the same as your API key.
 * @property {string} store_id - An internal identifier of how the file is stored.
 * @property {number} max_downloads_allowed - The maximum number of times the file may be downloaded.
 * @property {number} times_downloaded - The number of times the file has been downloaded.
 * @property {number} media_size - The size of the file in bytes.
 * @property {string} time_created - A timestamp for the time that the file was created.
 * @property {string} time_last_updated - A timestamp for the time that the file was last modified.
 * @property {boolean} public - Whether the item is available for download without authentication.
 * @property {string} [metadata_primary] - A user-set string containing metadata about the media file.
 * @property {string} [metadata_secondary] - A user-set string containing further metadata about the media file.
 * @property {string} id - A UUID representing the object.
 * @property {string} etag - An identifier for the content. This will change if the content of the file has been changed (i.e., if you upload a new version of the file). For more information, see Wikipedia: HTTP ETag.
 */

export {};
