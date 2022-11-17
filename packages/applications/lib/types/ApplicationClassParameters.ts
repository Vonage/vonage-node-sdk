import { AuthInterface, AuthOpts } from '@vonage/auth';
import { VetchOptions } from '@vonage/vetch';

export type ApplicationClassParameters = AuthOpts &
    VetchOptions & {
    auth?: AuthInterface;
};
