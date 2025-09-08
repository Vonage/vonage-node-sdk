import { BasicCallDetail } from './BasicCallDetail.js';
import { CommonCallFields } from './CommonCallFields.js';
import { CallDirection } from '../enums/index.js';

/**
 * Represents detailed information about a call, including common call fields, call direction, rate, price, start time,
 * end time, and network information.
 */
export type CallDetail = CommonCallFields & BasicCallDetail & {
  /**
   * The direction of the call, indicating whether it is inbound or outbound.
   */
  direction: CallDirection;

  /**
   * The rate associated with the call in a string format.
   */
  rate: string;

  /**
   * The price of the call in a string format.
   */
  price: string;

  /**
   * The start time of the call in a string format.
   */
  startTime: string;

  /**
   * The end time of the call in a string format.
   */
  endTime: string;

  /**
   * The network information related to the call.
   */
  network: string;
};
