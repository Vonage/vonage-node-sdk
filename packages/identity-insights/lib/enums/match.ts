/**
 * Enum representing the possible status values for the subscriber match fields
 */
export enum Match {
  /**
   * The value provided matches exactly.
   */
  EXACT = 'exact',

  /**
   * The value provided is a close but imperfect match.
   */
  HIGH = 'high',

  /**
   * The value provided partially matches.
   */
  PARTIAL = 'partial',

  /**
   * The value provided matches only slightly.
   */
  LOW = 'low',

  /**
   * The value provided does not match at all.
   */
  NONE = 'none',

  /**
   * There is no data held for the request attribute.
   */
  DATA_UNAVAILABLE = 'data_unavailable',
}

export enum MatchAddress {
  /**
   * The value provided matches with part of the address
   */
  INCLUDED_WITH_ADDRESS_MATCH = 'included_with_address_match',
}
