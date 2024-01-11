/**
 * Enum representing the outcomes of a lookup operation.
 */
export enum LookupOutcome {
  /**
   * The lookup operation was successful.
   */
  SUCCESS = 0,

  /**
   * The lookup operation partially succeeded.
   */
  PARTIAL_SUCCESS = 1,

  /**
   * The lookup operation failed.
   */
  FAILED = 2,
}
