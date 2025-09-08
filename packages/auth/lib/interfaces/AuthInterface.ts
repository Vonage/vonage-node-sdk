import { AuthQueryParams, AuthSignedParams, AuthParams } from '../types/index.js';

/**
 * Interface defining the methods for handling various authentication
 * mechanisms and parameter generation.
 *
 * @interface
 * @extends {AuthParams}
 */
export interface AuthInterface extends AuthParams {
  /**
   * Asynchronously generates query parameters for authentication,
   * optionally merging with provided parameters.
   *
   * @template T - Type of the additional parameters to merge with.
   * @param {T} [params] - Additional parameters to merge with the
   *     generated authentication query parameters.
   * @returns {Promise<AuthQueryParams & T>} - A promise that resolves
   *     with the merged authentication query parameters.
   */
  getQueryParams<T>(params?: T): Promise<AuthQueryParams & T>;

  /**
   * Asynchronously generates a signature hash for authentication,
   * merging it with provided parameters.
   *
   * @template T - Type of the parameters to merge with.
   * @param {T} params - Parameters to merge with the generated
   *     signature hash.
   * @returns {Promise<AuthSignedParams & T>} - A promise that resolves
   *     with the merged signature hash and parameters.
   */
  createSignatureHash<T>(params: T): Promise<AuthSignedParams & T>;

  /**
   * Asynchronously generates a basic authentication header.
   *
   * @returns {Promise<string>} - A promise that resolves with the
   *     generated basic authentication header.
   */
  createBasicHeader(): Promise<string>;

  /**
   * Asynchronously generates a bearer authentication header.
   *
   * @returns {Promise<string>} - A promise that resolves with the
   *     generated bearer authentication header.
   */
  createBearerHeader(): Promise<string>;
}
