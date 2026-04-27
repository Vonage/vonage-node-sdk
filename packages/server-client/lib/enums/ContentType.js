/**
 * Enum representing possible MIME types for the 'content-type' HTTP header.
 *
 * Note: Most of the APIs will only accept `application/json`. Please refer
 * to the specific API documentation to determine if another content type is
 * accepted.
 *
 * @enum {string}
 */
export const ContentType = Object.freeze({
  /** Represents the MIME type for JSON data. */
  JSON: 'application/json',

  /** Represents the MIME type for URL-encoded form data. */
  FORM_URLENCODED: 'application/x-www-form-urlencoded',

  /** Represents the MIME type for XML data. */
  XML: 'application/xml',

  /** Represents the MIME type for CSV data. */
  CSV: 'text/csv',
});
