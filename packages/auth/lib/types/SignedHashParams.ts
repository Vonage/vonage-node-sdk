import { AlgorithmTypes } from '../enums/index.js';

/**
 * Represents the parameters required for generating a signed hash.
 *
 */
export type SignedHashParams = {
  /**
   * The secret key used to sign the hash, ensuring the integrity and
   * authenticity of the message. It should be kept private and secure.
   */
  secret: string;

  /**
   * Specifies the algorithm type used for signing the hash. Utilizes the
   * algorithm types defined in the `AlgorithmTypes` enum.
   */
  algorithm: AlgorithmTypes;
};
