import { BaseReportParams } from './baseReportParams.js';
import { Product } from '../../enums/index.js';
import { DateReportParams } from './dateReportParams.js';

/**
 * Parameters for requesting an SMS Traffic Control product report.
 */
export type SMSTrafficControlReportParams = {
  /**
   * Must be {@link Product.SMS_TRAFFIC_CONTROL}.
   */
  product: Product.SMS_TRAFFIC_CONTROL,
} & BaseReportParams & DateReportParams;
