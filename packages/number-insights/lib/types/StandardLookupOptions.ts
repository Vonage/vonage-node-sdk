import { BasicLookupOptions } from './BasicLookupOptions';

/**
 * Interface representing standard lookup options for a phone number lookup operation.
 */
export type StandardLookupOptions = BasicLookupOptions & {
  /**
   * Indicates whether caller name (CNAME) information should be included in the lookup.
   * If `true`, CNAME information is included; otherwise, it's not included.
   */
  cname?: boolean;
};
