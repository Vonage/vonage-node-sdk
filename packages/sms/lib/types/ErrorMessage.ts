/**
 * Interface representing an error message.
 *
 * Describes the structure of an error message containing status and error text.
 */
export type ErrorMessage = {
  /**
   * The status code indicating the error (optional).
   */
  status?: string;

  /**
   * The error text providing details about the error (optional).
   */
  errorText?: string;
}
