import { Product } from '../../enums/index.js';

/**
 * Base parameters required for all report requests.
 */
export type BaseReportParams = {
  /**
   * The product to return records for.
   */
  product: Product,

  /**
   * The account ID (API key) to request records for. May differ from the
   * authenticated API key when a primary account is requesting records
   * for a subaccount.
   */
  accountId: string,
};
