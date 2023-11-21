/**
 * Enum representing the status of a Verify search request.
 */
export enum SearchStatus {
  /**
   * The search is still in progress.
   */
  IN_PROGRESS = 'IN PROGRESS',

  /**
   * Your user entered a correct verification code.
   */
  SUCCESS = 'SUCCESS',

  /**
   * Your user entered an incorrect code more than three times.
   */
  FAILED = 'FAILED',

  /**
   * Your user did not enter a code before the pin_expiry time elapsed.
   */
  EXPIRED = 'EXPIRED',

  /**
   * The verification process was canceled by a Verify control request.
   */
  CANCELLED = 'CANCELLED',
}
