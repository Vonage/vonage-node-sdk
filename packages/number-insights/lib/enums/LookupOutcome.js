/**
 * Enum representing the outcomes of a lookup operation.
 * @enum {string}
 */
export const LookupOutcome = Object.freeze({
  /**
     * The lookup operation was successful.
     */
  SUCCESS: 0,
  /**
     * The lookup operation partially succeeded.
     */
  PARTIAL_SUCCESS: 1,
  /**
     * The lookup operation failed.
     */
  FAILED: 2
});
