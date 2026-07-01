import { Product } from '../../enums/index.js';
import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';

/**
 * Parameters for requesting an In-App Voice product report.
 */
export type InAppVoiceReportParams = {
  /**
   * Must be {@link Product.IN_APP_VOICE}.
   */
  product: Product.IN_APP_VOICE,

  /**
   * Conversation ID to filter records by.
   */
  conversationId?: string,

  /**
   * Call termination status to filter records by.
   */
  status?: string,

  /**
   * Unique call leg identifier to filter records by.
   */
  legId?: string,
} & BaseReportParams & DateReportParams;
