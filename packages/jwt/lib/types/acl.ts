/**
 * Represents a rule for Access Control List (ACL).
 */
export type ACLRule = {
  /**
   * An array of HTTP methods allowed by this rule.
   */
  methods?: Array<'POST' | 'PUT' | 'PATCH' | 'GET' | 'DELETE'>;

  /**
   * Filters associated with this rule for more fine-grained control.
   */
  filters?: Record<string, string | number | unknown | Array<unknown>>;
};

/**
 * Represents an Access Control List (ACL) with rules for different paths.
 */
export type ACL = {
  /**
   * Rules associated with different paths.
   */
  paths: Record<string, ACLRule>;
};
