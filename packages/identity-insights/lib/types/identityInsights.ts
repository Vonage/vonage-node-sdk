import { Insights } from './insights.js';

/**
 * Represents the result of a identity insights.
 *
 */
export type IdentityInsightsType = {
  /**
   * Unique UUID for this request for reference.
   */
  requestId: string;

  /**
   * The object containing all insight information.
   */
  insights: Insights;
};
