import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { Product } from '../../enums/index.js';
import { NetworkReportParams } from './networkReportParams.js';

/**
 * Parameters for requesting a Number Insight (v1) product report.
 */
export type NumberInsightsV1ReportParams = {
  /**
   * Must be {@link Product.NUMBER_INSIGHT}.
   */
  product: Product.NUMBER_INSIGHT,

  /**
   * Phone number to filter records by.
   */
  number?: string,
} & BaseReportParams
  & DateReportParams
  & NetworkReportParams
