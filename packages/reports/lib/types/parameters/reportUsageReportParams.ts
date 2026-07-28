import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { Product } from '../../enums/index.js';

/**
 * Parameters for requesting a Reports API usage product report.
 */
export type ReportUsageReportParams = {
  /**
   * Must be {@link Product.REPORTS_USAGE}.
   */
  product: Product.REPORTS_USAGE,
} & BaseReportParams
  & DateReportParams
