import { Status, SubscriberMatchStatus } from '../enums/index.js';

/**
 * Represents the result of the insight operation.
 */
export type StatusType = {
  /**
   * The status of the insight.
   */
  status: {
    /**
     * Code indicating the status of the request. This enum is extensible;
     * clients must handle unknown values.
     */
    code: Status | string;

    /**
     * More detailed status description.
     */
    message: string;
  }
};

/**
 * Represents the result of the subscriber match insight operation.
 */

export type SubscriberMatchStatusType = {
  /**
   * The status of the insight.
   */
  status: {
    /**
     * Code indicating the status of the request. This enum is extensible;
     * clients must handle unknown values.
     */
    code: Status | SubscriberMatchStatus | string;

    /**
     * More detailed status description.
     */
    message: string;
  }
};
