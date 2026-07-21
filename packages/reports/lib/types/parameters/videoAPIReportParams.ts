import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { Product } from '../../enums/index.js';

/**
 * Parameters for requesting a Video API product report.
 */
export type VideoAPIReportParams = {
  /**
   * Must be {@link Product.VIDEO_API}.
   */
  product: Product.VIDEO_API,
  /**
   * Video session ID to filter records by.
   */
  sessionId?: string,

  /**
   * Meeting ID to filter records by.
   */
  meetingId?: string,
} & BaseReportParams
  & DateReportParams
