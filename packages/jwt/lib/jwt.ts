import { JWTInterface, GeneratorOptions, Claims } from './common'
import { sign } from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

export class JWT implements JWTInterface{
    tokenGenerate<T>(
        applicationId: string,
        privateKey: string | Buffer,
        opts?: GeneratorOptions
    ): string {
        if (!applicationId || !privateKey)
            throw new Error('Missing applicationId or privateKey')

        if (typeof applicationId !== 'string') {
            throw new Error('applicationId must be string')
        }

        if (typeof privateKey !== 'string' && !(privateKey instanceof Buffer)) {
            throw new Error('privateKey must be string or buffer')
        }

        let claims = this.validateOptions(opts)
        claims.application_id = applicationId
        
        return sign(claims, privateKey, {
            algorithm: 'RS256',
            header: { typ: 'JWT', alg: 'RS256' },
        })
    }

    private validateOptions(opts?: GeneratorOptions): Claims {
        let now = parseInt((Date.now() / 1000).toString(), 10);

        let claims: Claims = {
            jti: opts?.jti || uuidv4(),
            iat: opts?.issued_at || now,
            exp: now + (opts?.ttl || 900)
        }

        if (opts?.subject) {
            claims.sub = opts.subject
        }

        if (opts?.acl) {
            claims.acl = opts.acl
        }

        return claims
    }
}
