/**
 * Enumeration of supported algorithm types for HMAC hashing.
 *
 * @remarks
 * Ensure to select an algorithm that adheres to your security
 * requirements and is supported by the API endpoint you're interacting with.
 */
export enum AlgorithmTypes {
  /** Represents the MD5 hash algorithm */
  md5hash = 'MD5HASH',

  /** Represents the HMAC-MD5 hash algorithm, which uses a secret key for hashing. */
  md5hmac = 'MD5HMAC',

  /** Represents the HMAC-SHA1 hash algorithm, which uses a secret key for hashing. */
  sha1hmac = 'SHA1HMAC',

  /** Represents the HMAC-SHA256 hash algorithm, which uses a secret key for hashing. */
  sha256hmac = 'SHA256HMAC',

  /** Represents the HMAC-SHA512 hash algorithm, which uses a secret key for hashing. */
  sha512hmac = 'SHA512HMAC',
}
