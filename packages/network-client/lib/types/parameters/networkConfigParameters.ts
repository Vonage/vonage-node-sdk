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
};
