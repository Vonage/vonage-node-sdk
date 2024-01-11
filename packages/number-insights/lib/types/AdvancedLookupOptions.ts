import { StandardLookupOptions } from './StandardLookupOptions';

/**
 * Interface representing advanced lookup options for a phone number lookup operation.
 */
export type AdvancedLookupOptions = StandardLookupOptions & {
  /**
   * Indicates whether real-time data should be included in the lookup.
   * If `true`, real-time data is included; otherwise, it's not included.
   */
  real_time_data?: boolean;
};
