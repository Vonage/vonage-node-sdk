import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { Product } from '../../enums/index.js';

/**
 * Parameters for requesting a Conversation Message product report.
 */
export type ConversationReportParams = {
  /**
   * Must be {@link Product.CONVERSATION_MESSAGE}.
   */
  product: Product.CONVERSATION_MESSAGE,

  /**
   * Conversation ID to filter records by.
   */
  conversationId?: string,
} & BaseReportParams
  & DateReportParams
