import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { CountryReportParams } from './countryReportParams.js';
import { Product, VerifyChannel } from '../../enums/index.js';
import { RecipientReportParams } from './recipientReportParams.js';
import { NetworkReportParams } from './networkReportParams.js';

/**
 * Parameters for requesting a Verify v2 product report.
 */
export type VerifyV2ReportParams = {
  /**
   * Must be {@link Product.VERIFY_V2}.
   */
  product: Product.VERIFY_V2,

  /**
   * Verification channel to filter records by.
   */
  channel?: VerifyChannel,

  /**
   * Parent request ID to filter records by. Correlates a `v2`
   * verification request with its associated `email` or `silent_auth`
   * events.
   */
  parentRequestId?: string,

  /**
   * Language/locale to filter records by (e.g. `en-gb`).
   */
  locale?: string,

  /**
   * Request status to filter records by.
   */
  status?: string,
} & BaseReportParams
  & DateReportParams
  & CountryReportParams
  & RecipientReportParams
  & NetworkReportParams;
