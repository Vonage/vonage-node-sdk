/**
 * Enumeration representing possible message types for SMS.
 *
 * Defines different message types that can be associated with SMS messages.
 */
export enum TypeEnum {
  /**
   * Text: The message body contains standard text.
   */
  TEXT = 'text',

  /**
   * Binary: The message body is in binary format.
   */
  BINARY = 'binary',

  /**
   * Unicode: The message body is URL-encoded Unicode, valid for various character sets.
   */
  UNICODE = 'unicode',
}
