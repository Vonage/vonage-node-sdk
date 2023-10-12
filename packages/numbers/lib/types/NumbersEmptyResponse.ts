/**
 * Represents a response with optional error code and label for empty number-related operations.
 */
export type NumbersEmptyResponse = {
  /**
   * The error code, if an error occurred during the operation.
   * Example: "E001".
   */
  errorCode?: string;

  /**
   * A human-readable label or description of the error code.
   * Example: "Invalid request."
   */
  errorCodeLabel?: string;

  /**
   * The error code, if an error occurred during the operation.
   * Example: "E001".
   */
  'error-code'?: 200 | 401 | number;

  /**
   * A human-readable label or description of the error code.
   * Example: "Invalid request."
   */
  'error-code-label'?: string
};
