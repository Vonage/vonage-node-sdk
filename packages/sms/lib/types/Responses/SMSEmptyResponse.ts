/**
 * Deprecated interface for an empty SMS response.
 *
 * @deprecated There is no substitution for this interface.
 */
export type SMSEmptyResponse = {
  /**
   * The error code, if applicable (optional).
   */
  errorCode?: string;

  /**
   * A label for the error code, if provided (optional).
   */
  errorCodeLabel?: string;
}
