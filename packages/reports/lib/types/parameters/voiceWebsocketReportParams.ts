import { Product } from '../../enums/index.js';
import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';

/**
 * Parameters for requesting a WebSocket Call product report.
 */
export type VoiceWebsocketReportParams = {
  /**
   * Must be {@link Product.WEBSOCKET_CALL}.
   */
  product: Product.WEBSOCKET_CALL,

  /**
   * Unique WebSocket call identifier to filter records by.
   */
  callId?: string,
} & DateReportParams & BaseReportParams;
