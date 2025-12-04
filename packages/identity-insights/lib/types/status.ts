import { Status, SubscriberMatchStatus } from '../enums/index.js';

/**
 * Represents the result of the insight operation.
 */
export type StatusType = {
  /**
   * The status of the insight.
   */
  status: Status;

  /**
   * More detailed status description.
   */
  message: string;
};

/**
 * Represents the result of the subscriber match insight operation.
 */

export type SubscriberMatchStatusType = {
  /**
   * The status of the insight.
   */
  status: Status | SubscriberMatchStatus | string;

  /**
   * More detailed status description.
   */
  message: string;
};
