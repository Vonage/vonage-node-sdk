/**
 * Enum representing the result of the location verification request
 */
export enum LocationVerified {
  /**
   * The network locates the device within the requested area,
   */
  TRUE = 'true',

  /**
   * The requested area does not match the area where the network locates the device
   */
  FALSE = 'false',

  /**
   * The network cannot locate the device
   */
  UNKNOWN = 'unknown',

  /**
   * The requested area partially match the area where the network locates the device.
   */
  PARTIAL = 'partial',
}
