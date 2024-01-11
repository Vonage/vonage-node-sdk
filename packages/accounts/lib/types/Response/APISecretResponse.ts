import { APILinks } from '@vonage/server-client';

/**
 * Represents the response structure for an individual API secret.
 *
 * @remarks
 * Many of the Vonage APIs are accessed using an API key and secret. It is recommended to manage
 * and occasionally rotate these secrets for security purposes. This structure provides details
 * for a single API secret.
 *
 * @see {@link APILinks}
 */
export type APISecretResponse = APILinks & {
  /**
   * The unique identifier for the API secret.
   */
  id: string;

  /**
   * The timestamp indicating when the API secret was created.
   */
  created_at: string;
}
