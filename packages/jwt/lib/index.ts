import { JWT } from './jwt'
import { GeneratorOptions } from './common'

export { JWT }

const instance = new JWT()

export function tokenGenerate<T>(
    applicationId: string,
    privateKey: string | Buffer,
    opts?: GeneratorOptions
) {
    return instance.tokenGenerate(applicationId, privateKey, opts)
}
