export interface Token {
    config: GeneratorOptions
    token: string
}

export interface GeneratorOptions {
    ttl?: number
    issued_at?: number
    subject?: string
    jti?: string
    notBefore?: number
    acl?: any
}

export interface Claims {
    exp?: number
    sub?: string
    jti?: string
    nbf?: number
    acl?: object
    iat?: number
    application_id?: string
}

export interface JWTInterface {
    tokenGenerate(
        applicationId: string,
        privateKey: string | Buffer,
        opts?: GeneratorOptions
    ): void
}