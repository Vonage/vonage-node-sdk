import { AuthQueryParams, AuthSignedParams, AuthParams } from '../types/index';

export interface AuthInterface extends AuthParams {
    getQueryParams<T>(params?: T): Promise<AuthQueryParams & T>
    createSignatureHash<T>(params: T): Promise<AuthSignedParams & T>
    createBasicHeader(): Promise<string>
    createBearerHeader(): Promise<string>
}
