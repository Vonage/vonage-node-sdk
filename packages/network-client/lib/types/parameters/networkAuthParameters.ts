import { AuthParams } from '@vonage/auth';

export type NetworkAuthParameters = AuthParams & {
  /**
   * The msisdn that will be used for API calls
   */
  msisdn: string,
}
