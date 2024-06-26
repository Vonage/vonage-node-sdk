import { AuthInterface, AuthParams } from '@vonage/auth';
import { VetchOptions } from '@vonage/vetch';

/**
 * Represents the parameters for configuring the NumbersClass.
 *
 * @deprecated This is no longer in use
 */
export type NumbersClassParameters = AuthParams &
  VetchOptions & {
  /**
   * The authentication configuration.
   */
  auth?: AuthInterface;
};
