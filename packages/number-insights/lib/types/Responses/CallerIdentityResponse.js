/**
 * Type representing the identity of a caller.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} CallerIdentityResponse
 * @property {CallerType} caller_type - The type of the caller, either "business," "consumer," or "unknown."
 * @property {string} caller_name - The caller's name.
 * @property {string} first_name - The caller's first name.
 * @property {string} last_name - The caller's last name.
 */

export {};
