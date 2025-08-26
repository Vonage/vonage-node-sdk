import { StandardLookupOptions } from './StandardLookupOptions.js';

/**
 * Interface representing asynchronous advanced lookup options for a phone number lookup operation.
 */
export type AsyncAdvancedLookupOptions = StandardLookupOptions & {
  /**
   * The callback URL to which the lookup response will be sent asynchronously.
   */
  callback: string;
};
