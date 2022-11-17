import { AuthInterface, AuthOpts } from '@vonage/auth';
import { VetchOptions } from '@vonage/vetch';

export type PricingClassParameters = AuthOpts &
    VetchOptions & {
    auth?: AuthInterface
}
