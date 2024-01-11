/**
 * Enumeration representing different event types.
 */
export enum EventTypes {
  /**
   * Event type: Action call succeeded.
   */
  ACTION_CALL_SUCCEEDED = 'action-call-succeeded',

  /**
   * Event type: Action call failed.
   */
  ACTION_CALL_FAILED = 'action-call-failed',

  /**
   * Event type: Action call info.
   */
  ACTION_CALL_INFO = 'action-call-info',

  /**
   * Event type: Recipient response.
   */
  RECIPIENT_RESPONSE = 'recipient-response',

  /**
   * Event type: Run item skipped.
   */
  RUN_ITEM_SKIPPED = 'run-item-skipped',

  /**
   * Event type: Run item failed.
   */
  RUN_ITEM_FAILED = 'run-item-failed',

  /**
   * Event type: Run item submitted.
   */
  RUN_ITEM_SUBMITTED = 'run-item-submitted',

  /**
   * Event type: Run items total.
   */
  RUN_ITEMS_TOTAL = 'run-items-total',

  /**
   * Event type: Run items ready.
   */
  RUN_ITEMS_READY = 'run-items-ready',

  /**
   * Event type: Run items excluded.
   */
  RUN_ITEMS_EXCLUDED = 'run-items-excluded',
}
