import { AuthInterface, AuthOpts } from '@vonage/auth'
import { VetchOptions } from '@vonage/vetch'

export type MessagesClassParameters = AuthOpts &
    VetchOptions & {
        applicationId?: string
        privateKey?: string
        auth?: AuthInterface
    }
