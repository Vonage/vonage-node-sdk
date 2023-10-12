/**
 * Represents an error response.
 */
export interface ErrorResponse {
  /**
   * The type of error.
   */
  type: string;

  /**
   * A short title or summary of the error.
   */
  title: string;

  /**
   * A detailed description of the error.
   */
  detail: string;

  /**
   * An instance identifier associated with the error.
   */
  instance: string;
}
