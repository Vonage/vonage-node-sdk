import { VerificationParameters } from './VerificationParams.js';

/**
 * Represents parameters for a PSD2 (Payment Services Directive 2)
 * verification request.
 */
export type PSD2Parameters = Omit<
  VerificationParameters,
  'brand' | 'senderId' | 'pinCode'
> & {
  /**
   * The payee's name or identifier for the payment confirmation.
   */
  payee: string;

  /**
   * The decimal amount of the payment to be confirmed, in Euros.
   */
  amount: number;
}
