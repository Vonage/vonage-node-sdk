/**
 * Represents a media item.
 *
 * @typedef {Object} MediaItem
 * @property {string} id - A UUID representing the object.
 * @property {string} [title] - An optional title for the media file.
 * @property {string} [description] - An optional description of the media file.
 * @property {string} originalFileName - The filename of the object as it was originally uploaded.
 * @property {string} mimeType - The IETF MIME type of the file.
 * @property {string} accountId - The ID of your Nexmo account. This is the same as your API key.
 * @property {string} storeId - An internal identifier of how the file is stored.
 * @property {number} maxDownloadsAllowed - The maximum number of times the file may be downloaded.
 * @property {number} timesDownloaded - The number of times the file has been downloaded.
 * @property {string} etag - An identifier for the content. This will change if the content of the file has been changed (i.e., if you upload a new version of the file). For more information, see Wikipedia: HTTP ETag.
 * @property {number} mediaSize - The size of the file in bytes.
 * @property {string} timeCreated - A timestamp for the time that the file was created.
 * @property {string} timeLastUpdated - A timestamp for the time that the file was last modified.
 * @property {boolean} public - Whether the item is available for download without authentication.
 * @property {string} [metadataPrimary] - A user-set string containing metadata about the media file.
 * @property {string} [metadataSecondary] - A user-set string containing further metadata about the media file.
 */

export {};
