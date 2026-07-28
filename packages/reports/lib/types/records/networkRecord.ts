/**
 * Common network fields shared by record types that include network data.
 */
export type NetworkRecord = {
  /**
   * Network code of the destination or origin phone number.
   */
  network?: string,

  /**
   * Name of the network code.
   */
  networkName?: string,
}
