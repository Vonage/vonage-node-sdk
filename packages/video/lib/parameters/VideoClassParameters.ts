import { AuthParams } from '@vonage/auth';
import { AuthInterface } from '@vonage/auth';
import { VetchOptions } from '@vonage/vetch';

/**
 * Parameters required to initialize the Video class.
 */
export type VideoClassParameters = AuthParams &
  VetchOptions & {
  /**
   * The unique identifier for the application.
   */
  applicationId: string;

  /**
   * The private key used for authentication.
   */
  privateKey: string;

  /**
   * Optional authentication interface to use for custom authentication.
   */
  auth?: AuthInterface;
};
