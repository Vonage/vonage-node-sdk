/**
 * Interface representing claims for a client token.
 *
 * @typedef {Object} ClientTokenClaims
 * @property {string} scope - The scope of the token.
 * @property {string} session_id - The session ID associated with the token.
 * @property {string} role - The role of the token.
 * @property {string} initial_layout_class_list - The initial layout class list.
 * @property {string} [data] - Additional data for the token (optional).
 * @property {number} [exp] - The expiration time of the token (optional).
 * @property {string} [connection_data] - Connection data associated with the token (optional).
 * @property {string} sub - The subject of the token.
 * @property {Object} acl - Access control list (ACL) for paths. Paths and associated objects in the ACL.
 */

export {};
