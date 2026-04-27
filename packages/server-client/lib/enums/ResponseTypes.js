/**
 * Enum representing the expected response types for API requests.
 *
 * @deprecated The client will now use the `content-type` header to decode the
 * response properly.
 *
 * @enum {string}
 */
export const ResponseTypes = Object.freeze({
  /**
   * Represents a JSON-formatted response.
   */
  json: 'json',

  /**
   * Represents a stream response, typically for handling large data or files.
   */
  stream: 'stream',

  /**
   * Represents a plain text response.
   */
  text: 'text',
});
