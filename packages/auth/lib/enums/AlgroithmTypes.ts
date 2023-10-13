/**
 * Enumeration of supported algorithm types for HMAC hashing.
 *
 * @enum {string}
 *
 * @property {string} md5hash - Represents the MD5 hash algorithm.
 *
 * @property {string} md5hmac - Represents the HMAC-MD5 hash algorithm,
 *     which uses a secret key for hashing.
 *
 * @property {string} sha1hmac - Represents the HMAC-SHA1 hash algorithm,
 *     which uses a secret key for hashing.
 *
 * @property {string} sha256hmac - Represents the HMAC-SHA256 hash algorithm,
 *     which uses a secret key for hashing.
 *
 * @property {string} sha512hmac - Represents the HMAC-SHA512 hash algorithm,
 *     which uses a secret key for hashing.
 *
 * Note: Ensure to select an algorithm that adheres to your security
 * requirements and is supported by the API endpoint you're interacting with.
 */
export enum AlgorithmTypes {
  md5hash = 'MD5HASH',
  md5hmac = 'MD5HMAC',
  sha1hmac = 'SHA1HMAC',
  sha256hmac = 'SHA256HMAC',
  sha512hmac = 'SHA512HMAC',
}
