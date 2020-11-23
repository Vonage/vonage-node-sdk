import {
    NumbersCtor,
    NumbersCtorOpts,
    NumbersInterface,
    NumberSearchOpts,
} from './common'

import { Auth, AuthInterface } from '@vonage/auth'

export const Numbers: NumbersCtor = class Numbers
           implements NumbersInterface {
           auth: AuthInterface

           constructor(opts?: NumbersCtorOpts) {
               this.auth = new Auth(opts)
           }

           getOwnedNumbers(opts?: NumberSearchOpts) {}

           // list account numbers with filter options
           // search available numbers
           // buy numbers
           // cancel numbers
           // update a number
           // base url is https://rest.nexmo.com/account/numbers
           // requires api key and secret
       }
