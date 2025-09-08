import { AuthenticationType, Client } from '@vonage/server-client';
import { APISecretResponse, ListAPISecretsResponse } from './types/index.js';

/**
 * Client class to interact with the Account API to create secrets in
 * their Vonage API Account programmatically.
 *
 * @remarks
 * This client is only available as a standalone client. It cannot be
 * instantiated from the server-sdk package.
 *
 * @example
 * Create a standalone Secret client
 *
 * ```ts
 * import { Secrets } from '@vonage/account';
 *
 * const secretClient = new Secrets({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 */
export class Secrets extends Client {
  protected authType = AuthenticationType.BASIC;

  /**
   * Create a new API secret for a given API key.
   *
   * @param {string} apiKey - The API key to manage secrets for.
   * @param {string} secret - The new secret. It must follow the provided rules:
   *   - Minimum 8 characters.
   *   - Maximum 25 characters.
   *   - At least 1 lowercase character.
   *   - At least 1 uppercase character.
   *   - At least 1 digit.
   *
   * @return {Promise<APISecretResponse>} A promise that resolves to an object representing the created API secret.
   *
   * @example
   * const { id } = await secretClient.createSecret(
   *  'new-api-key',
   *  'SuperSecret123!'
   * );
   *
   * console.log(`Created secret with ID ${id}`);
   */
  public async createSecret(
    apiKey: string,
    secret: string,
  ): Promise<APISecretResponse> {
    const response = await this.sendPostRequest<APISecretResponse>(
      `${this.config.apiHost}/accounts/${apiKey}/secrets`,
      { secret },
    );
    return response.data;
  }

  /**
   * Revoke (delete) an existing API secret for a given API key.
   *
   * @param {string} apiKey - The API key to manage secrets for.
   * @param {string} id - The ID of the API secret to revoke.
   * @return {Promise<void>} A promise that resolves when the secret has been revoked.
   *
   * @example
   * await secretClient.deleteSecret('my-api-key', 'my-secret-id');
   */
  public async deleteSecret(apiKey: string, id: string): Promise<void> {
    await this.sendDeleteRequest<void>(
      `${this.config.apiHost}/accounts/${apiKey}/secrets/${id}`,
    );
  }

  /**
   * Retrieve the details of a specific API secret for a given API key.
   *
   * @param {string} apiKey - The API key to manage secrets for.
   * @param {string} id - The ID of the API secret to retrieve.
   * @return {Promise<APISecretResponse>} A promise that resolves to an object representing the API secret.
   *
   * @example
   * const { id } = await secretClient.getSecret('my-api-key', 'my-secret-id');
   * console.log(`Secret with ID ${id} has been retrieved`);
   *
   */
  public async getSecret(
    apiKey: string,
    id: string,
  ): Promise<APISecretResponse> {
    const response = await this.sendGetRequest<APISecretResponse>(
      `${this.config.apiHost}/accounts/${apiKey}/secrets/${id}`,
    );
    return response.data;
  }

  /**
   * List all the secrets associated with a particular API key.
   *
   * @param {string} apiKey - The API key for which to list secrets.
   *
   * @return {Promise<ListAPISecretsResponse>} A promise that resolves to an object containing a list of API secrets.
   *
   * @example
   * const response = await secretClient.listSecrets('my-api-key');
   *
   * for (const secret of response._embedded.secrets) {
   *   console.log(`Secret with ID ${secret.id} has been retrieved`);
   * }
   */
  public async listSecrets(apiKey: string): Promise<ListAPISecretsResponse> {
    const response = await this.sendGetRequest<ListAPISecretsResponse>(
      `${this.config.apiHost}/accounts/${apiKey}/secrets`,
    );
    return response.data;
  }
}
