import { AuthenticationType, Client } from '@vonage/server-client';
import { APISecretResponse, ListAPISecretsResponse  } from './types';

/**
 * The `Secrets` class provides methods to manage API secrets using the Vonage API.
 */
export class Secrets extends Client {
  public authType = AuthenticationType.BASIC;

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
   * const result = await createSecret('your_api_key', 'example-4PI-secret');
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
   *
   * @return {Promise<void>} A promise that resolves when the secret has been revoked.
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
   *
   * @return {Promise<APISecretResponse>} A promise that resolves to an object representing the API secret.
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
   */
  public async listSecrets(apiKey: string): Promise<ListAPISecretsResponse> {
    const response = await this.sendGetRequest<ListAPISecretsResponse>(
      `${this.config.apiHost}/accounts/${apiKey}/secrets`,
    );
    return response.data;
  }
}
