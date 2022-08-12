import { AuthInterface, AuthOpts } from '@vonage/auth'
import { VetchOptions } from '@vonage/vetch'

export type NumberInsightsClassParameters = AuthOpts &
    VetchOptions & {
        auth?: AuthInterface
    }
