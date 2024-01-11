import { AuthInterface, AuthParams } from '@vonage/auth';
import { VetchOptions } from '@vonage/vetch';

/**
 * Represents parameters for configuring the VerifyClass.
 *
 * @deprecated The class will set the correct type
 */
export type VerifyClassParameters = AuthParams &
  VetchOptions & {
  /**
   * (Optional) An authentication interface to use for authentication.
   */
  auth?: AuthInterface;
};
