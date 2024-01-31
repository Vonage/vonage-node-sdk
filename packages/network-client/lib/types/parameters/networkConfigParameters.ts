import { ConfigParams } from '@vonage/server-client';


export type NetworkConfigParameters = ConfigParams & {
  /**
   * URL for making calls to get a network token
   */
  networkAuthHost: string;
}
