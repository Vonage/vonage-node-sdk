import { AuthInterface, AuthOpts } from '@vonage/auth'
import { VetchOptions } from '@vonage/vetch'

export type VerifyClassParameters = AuthOpts &
    VetchOptions & {
        auth?: AuthInterface
    }
