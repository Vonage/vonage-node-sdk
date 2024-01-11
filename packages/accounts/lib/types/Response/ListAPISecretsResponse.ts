import { APISecretResponse } from './APISecretResponse';
import { APILinks } from '@vonage/server-client';

/**
 * Represents the response structure when listing API secrets.
 *
 * @remarks
 *
 * Many of the Vonage APIs are accessed using an API key and secret. It is recommended that you
 * change or "rotate" your secrets from time to time for security purposes. This section provides
 * the API interface for achieving this. Note: to work on secrets for your secondary accounts,
 * you may authenticate with your primary credentials and supply the secondary API keys as URL
 * parameters to these API endpoints.
 *
 */
export type ListAPISecretsResponse = APILinks & {
  /**
   * Contains the embedded secrets information.
   */
  _embedded: {

    /**
     * An array of API secrets.
     * @see {@link APISecretResponse}
     */
    secrets: APISecretResponse[];
  };
}
