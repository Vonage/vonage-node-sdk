import { AuthInterface, AuthParams } from '@vonage/auth';
import { VetchOptions } from '@vonage/vetch';

/**
 * Type representing parameters for a pricing class, including authentication and Vetch options.
 */
export type PricingClassParameters = AuthParams &
  VetchOptions & {
  /**
   * An optional authentication interface.
   * @return {AuthInterface|undefined} - The authentication interface if provided, otherwise undefined.
   */
  auth?: AuthInterface;
};
