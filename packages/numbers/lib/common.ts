import { AuthInterface, AuthOpts } from '@vonage/auth'
import { VetchOptions } from '@vonage/vetch';


export interface NumbersCtor {
    new (opts?: NumbersCtorOpts): NumbersInterface
}

export interface NumbersCtorOpts extends AuthOpts, VetchOptions {}

export interface NumberSearchOpts {
    startsWith?: number
    endsWith?: number
    filter?: number
}

export interface NumbersInterface {
    auth: AuthInterface
    getOwnedNumbers(opts?: NumberSearchOpts): any
}