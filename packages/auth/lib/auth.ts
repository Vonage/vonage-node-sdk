import { AuthConstructor, AuthInterface, AuthOpts, AuthQueryParams } from './common'

export const Auth: AuthConstructor = class Auth implements AuthInterface{
    apiKey: string
    apiSecret: string

  constructor(opts?: AuthOpts) {
    // add additional methods to find auth
    // also needs to handle private key, signatures, etc
    
    this.apiKey = opts?.apiKey || ''
    this.apiSecret = opts?.apiSecret || ''
  }

  getQueryParams(): AuthQueryParams {
    return {api_key: this.apiKey, api_secret: this.apiSecret}
  }
}