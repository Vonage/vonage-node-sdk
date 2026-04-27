/**
 * Represents a phone endpoint, which can be used as a call destination.
 *
 * @typedef {Object} PhoneEndpoint
 * @property {'phone'} type - Specifies the type of endpoint, which is 'phone' for phone numbers.
 * @property {string} number - The phone number associated with the endpoint.
 * @property {string} [dtmfAnswer] - Provide DTMF digits to send when the call is answered
 * @property {string} [shaken] - STIR/SHAKEN Identity Header content for FCC-mandated call signing to the USA. Composed of the JWT (header, payload, and signature), an `info` parameter with a link for the certificate, the `alg` parameter indicating the encryption type, and the passport type (`ppt`) which should be `shaken`. @see {@link https://www.rfc-editor.org/rfc/rfc8225}
 */

export {};
