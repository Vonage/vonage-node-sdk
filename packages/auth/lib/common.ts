export interface AuthConstructor {
    new (opts?:AuthOpts): AuthInterface
}

export interface AuthOpts {
    apiKey?: string
    apiSecret?: string
    file?: string
}

export interface AuthQueryParams{
    api_key: string
    api_secret: string
}

export interface AuthInterface {
    apiKey: string
    apiSecret: string
    getQueryParams(): AuthQueryParams
}
