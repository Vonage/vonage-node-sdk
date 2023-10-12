/**
 * @deprecated
 * Enum representing the expected response types for API requests. This was
 * originaly used to set what the expected response type will be. It is better
 * to use the content-type header from the response to decode properly.
 */
export enum ResponseTypes {
  /**
   * Represents a JSON-formatted response.
   */
  json = 'json',

  /**
   * Represents a stream response, typically for handling large data or files.
   */
  stream = 'stream',

  /**
   * Represents a plain text response.
   */
  text = 'text',
}
