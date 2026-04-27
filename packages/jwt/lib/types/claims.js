/**
 * JWT claims.
 *
 * @typedef {Object} Claims
 * @property {number} [exp] - Expiration time of the JWT.
 * @property {string} [sub] - Subject claim, identifies the principal that is the subject of the JWT.
 * @property {string} [jti] - JWT ID claim, provides a unique identifier for the JWT.
 * @property {number} [nbf] - Not Before claim, identifies the time before which the JWT must not be accepted for processing.
 * @property {ACL} [acl] - Access Control List claim, provides access control information.
 * @property {number} [iat] - Issued At claim, identifies the time at which the JWT was issued.
 * @property {string} [application_id] - Application ID claim, identifies the application that is the subject of the JWT.
 */

export {};
