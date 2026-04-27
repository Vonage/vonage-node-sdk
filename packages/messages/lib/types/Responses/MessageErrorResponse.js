/**
 * Represents an error response received when sending a message.
 * This type includes information about the error type, title, details, and an instance identifier.
 * If applicable, it may also contain information about invalid parameters that caused the error.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} MessageErrorResponse
 * @property {string} type - The type of the error.
 * @property {string} title - A title or brief description of the error.
 * @property {string} detail - Additional details about the error.
 * @property {string} instance - An instance identifier for reference.
 * @property {Object} [invalid_parameters] - Optional: Invalid parameters that contributed to the error. The name of the invalid parameter. The reason or explanation for the parameter's invalidity.
 */

export {};
