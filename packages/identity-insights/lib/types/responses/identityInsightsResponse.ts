import { Insights } from '../insights.js';

/**
 * Represents the response from a fraud check request.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type IdentityInsightsResponse = {
  /**
   * Unique UUID for this request for reference.
   */
  requestId: string;

  /**
   * The object containing all insight information.
   */
  insights: Insights;

};
