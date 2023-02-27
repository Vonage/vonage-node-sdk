import { VerificationParameters } from './VerificationParams';

export type PSD2Parameters = Omit<
    VerificationParameters,
    'brand' | 'senderId' | 'pinCode'
> & {
    payee: string
    amount: number
}
