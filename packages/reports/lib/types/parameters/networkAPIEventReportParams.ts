import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { Product } from '../../enums/index.js';

/**
 * Parameters for requesting a Network API Event product report.
 */
export type NetworkAPIEventReportParams = {
  /**
   * Must be {@link Product.NETWORK_API_EVENT}.
   */
  product: Product.NETWORK_API_EVENT,

  /**
   * Product name within the CAMARA event-based product group
   * (e.g. `camara-sim-swap`, `camara-device-status`).
   */
  productName?: string,

  /**
   * Type of request to filter records by (e.g. `check`,
   * `retrieve-date`).
   */
  requestType?: string,

  /**
   * Vonage request session ID to filter records by.
   */
  requestSessionId?: string,

  /**
   * API path that initiated the call to filter records by.
   */
  productPath?: string,

  /**
   * Correlation ID shared across all intermediate events of the same
   * request.
   */
  correlationId?: string,
} & BaseReportParams
  & DateReportParams
