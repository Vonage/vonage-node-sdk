import { GeneratorOptions } from '@vonage/jwt';
import { SignedHashParams } from './SignedHashParams';

export type AuthParams = {
  apiKey?: string
  apiSecret?: string
  privateKey?: string | Buffer
  applicationId?: string
  signature?: SignedHashParams
  jwtOptions?: GeneratorOptions
}

/**
 * @deprecated please use AuthParams
 */
export type AuthOpts = AuthParams
