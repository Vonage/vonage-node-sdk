/**
 * Claims to pass in for the token generator.
 *
 * @typedef {Object} GeneratorOptions
 * @property {number} [ttl] - Time to live in seconds.
 * @property {number} [issued_at] - The time at which the JWT was issued.
 * @property {string} [subject] - Subject of the token.
 * @property {string} [jti] - JSON Web Token ID.
 * @property {number} [notBefore] - The time before which the JWT is not yet valid.
 * @property {ACL} [acl] - Access control list.
 * @property {string} [key] - Additional properties and values.
 * @property {number} [exp] - The time at which the JWT expires. If set to a time less than issued_at, the token will expire in 15 minutes.
 */

export {};
