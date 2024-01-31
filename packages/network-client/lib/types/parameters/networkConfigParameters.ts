import { ConfigParams } from '@vonage/server-client';

export type NetworkConfigParameters = ConfigParams & {
  /**
   * URL for making calls to get a network token
   */
  networkApiHost?: string;

  /**
   * URL for making calls to get a network token
   */
  odicHost?: string;

  /**
   * The URL to redirect to for the OAuth flow
   */
  redirectUri?: string;

  /**
   * Automatically refresh the token when it expires
   * @default true
   */
  autoRefreshToken?: boolean;

  /**
   * Weather or not to store the token for future requests
   * @default true
   */
  storeToken?: boolean;
};
