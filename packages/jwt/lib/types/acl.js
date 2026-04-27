/**
 * Represents a rule for Access Control List (ACL).
 *
 * @typedef {Object} ACLRule
 * @property {Array} [methods] - An array of HTTP methods allowed by this rule.
 * @property {Record>} [filters] - Filters associated with this rule for more fine-grained control.
 */

/**
 * Represents an Access Control List (ACL) with rules for different paths.
 *
 * @typedef {Object} ACL
 * @property {Record} paths - Rules associated with different paths.
 */

export {};
