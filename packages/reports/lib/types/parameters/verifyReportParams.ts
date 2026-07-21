import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { Product } from '../../enums/index.js';
import { RecipientReportParams } from './recipientReportParams.js';
import { NetworkReportParams } from './networkReportParams.js';

/**
 * Parameters for requesting a Verify API (v1) product report.
 */
export type VerifyReportParams = {
  /**
   * Must be {@link Product.VERIFY_API}.
   */
  product: Product.VERIFY_API,
} & BaseReportParams
  & DateReportParams
  & RecipientReportParams
  & NetworkReportParams;
