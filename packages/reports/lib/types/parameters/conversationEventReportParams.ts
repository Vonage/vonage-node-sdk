import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { Product } from '../../enums/index.js';

/**
 * Parameters for requesting a Conversation Event product report.
 */
export type ConversationEventReportParams = {
  /**
   * Must be {@link Product.CONVERSATION_EVENT}.
   */
  product: Product.CONVERSATION_EVENT,

  /**
   * Conversation ID to filter records by.
   */
  conversationId?: string,

  /**
   * Event status to filter records by.
   */
  status?: string,
} & BaseReportParams
  & DateReportParams
