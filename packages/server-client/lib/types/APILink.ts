/**
 * Represents a link object in the HAL format.
 *
 * @see {@link https://tools.ietf.org/html/rfc5988} for more details on Web Linking.
 *
 */
export type APILink = {
  /**
   * The URL of the link.
   */
  href: string
  // TODO Add more from RFC 5988?
}
