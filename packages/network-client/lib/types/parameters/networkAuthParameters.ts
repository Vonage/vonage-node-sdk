import { AuthParams } from '@vonage/auth';

export type NetworkAuthParameters = AuthParams & {
  /**
   * The msisdn that will be used for API calls
   */
  msisdn: string;

  /**
   * The access token to use for API calls
   */
  accessToken?: string;

  /**
   * The expiration time of the access token (in seconds)
   */
  expiresIn?: number;
};
