import { AuthInterface, AuthOpts } from '@vonage/auth';
import { VetchOptions } from '@vonage/vetch';

export type VideoClassParameters = AuthOpts &
    VetchOptions & {
    applicationId: string;
    privateKey: string;
    auth?: AuthInterface;
};
