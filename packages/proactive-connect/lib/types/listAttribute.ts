/**
 * Represents an attribute associated with a list.
 */
export type ListAttribute = {
  /**
   * The name of the attribute.
   */
  name: string;

  /**
   * An optional alias for the attribute.
   */
  alias?: string;

  /**
   * Indicates whether the attribute is a key attribute (optional).
   * Set to `true` if this attribute should be used as a key to correlate lists.
   */
  key?: boolean;
};
